import { findAutomation } from "@/actions/automations/queries";
import {
  createChatHistory,
  getChatHistory,
  getKeywordAutomation,
  getKeywordPost,
  matchKeyword,
  trackResponses,
} from "@/actions/webhook/queries";
import { sendDM, sendPrivateMessage } from "@/lib/fetch";
import { client } from "@/lib/prisma";
import { GoogleGenerativeAI } from "@google/generative-ai";
import { NextRequest, NextResponse } from "next/server";

// Initialize Gemini AI
const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY || "");

export async function GET(req: NextRequest) {
  const mode = req.nextUrl.searchParams.get("hub.mode");
  const token = req.nextUrl.searchParams.get("hub.verify_token");
  const challenge = req.nextUrl.searchParams.get("hub.challenge");

  // Replace 'YOUR_VERIFY_TOKEN' with the token you configured in Meta Developer Portal
  const verifyToken = process.env.META_WEBHOOK_VERIFY_TOKEN || "testing";

  if (mode === "subscribe") {
    return new NextResponse(challenge);
  } else {
    return new NextResponse("Verification Failed", { status: 403 });
  }
}

export async function POST(req: NextRequest) {
  const webhook_payload = await req.json();
  let matcher;
  try {
    // Handle direct messages
    if (webhook_payload.entry[0].messaging) {
      const messagingEvent = webhook_payload.entry[0]?.messaging?.[0];
      const messageText = messagingEvent?.message?.text;

      if (!messageText) {
        return NextResponse.json(
          { message: "No message text found in payload" },
          { status: 200 } // Still acknowledge webhook
        );
      }

      matcher = await matchKeyword(messageText);
    }

    // Handle comments
    if (webhook_payload.entry[0].changes) {
      const commentText = webhook_payload.entry[0].changes[0].value.text;
      matcher = await matchKeyword(commentText);
    }

    if (matcher && matcher.automationId) {
      // Handle direct messages with matching keywords
      if (webhook_payload.entry[0].messaging) {
        const automation = await getKeywordAutomation(
          matcher.automationId,
          true
        );

        if (automation && automation.trigger) {
          // Check if we have a valid integration token
          const hasValidToken =
            automation.User?.integrations &&
            automation.User.integrations.length > 0 &&
            automation.User.integrations[0].token;

          if (!hasValidToken) {
            return NextResponse.json(
              {
                message: "No valid Instagram integration token found",
                error: "Missing integration token",
              },
              { status: 200 }
            );
          }

          // Check if automation type is for genAi or standard response
          const isGenAiResponse = automation.listener?.listener === "SMARTAI";

          // For standard message response
          if (
            automation.listener &&
            automation.listener.listener === "MESSAGE"
          ) {
            try {
              const direct_message = await sendDM(
                webhook_payload.entry[0].id,
                webhook_payload.entry[0].messaging[0].sender.id,
                automation.listener?.prompt || "Thank you for your message.",
                automation?.User?.integrations[0]?.token!
              );

              if (direct_message.status === 200) {
                const tracked = await trackResponses(automation.id, "DM");

                if (tracked) {
                  return NextResponse.json(
                    {
                      message: "Message sent",
                    },
                    { status: 200 }
                  );
                }
              }
            } catch (error) {
              return NextResponse.json(
                {
                  message: "Error sending message",
                  error: error instanceof Error ? error.message : String(error),
                },
                { status: 200 }
              );
            }
          } else if (
            isGenAiResponse &&
            automation.User?.subscription?.plan === "PRO"
          ) {
            try {
              // Create a Gemini model instance
              const model = genAI.getGenerativeModel({
                model: "gemini-1.5-flash",
              });

              const prompt = `${automation.listener?.prompt}: Keep responses under 2 sentences`;

              const result = await model.generateContent(prompt);
              const response = await result.response;
              const aiResponse = response.text();

              if (aiResponse) {
                const reciever = createChatHistory(
                  automation.id,
                  webhook_payload.entry[0].id,
                  webhook_payload.entry[0].messaging[0].sender.id,
                  webhook_payload.entry[0].messaging[0].message.text
                );

                const sender = createChatHistory(
                  automation.id,
                  webhook_payload.entry[0].id,
                  webhook_payload.entry[0].messaging[0].sender.id,
                  aiResponse
                );

                await Promise.all([reciever, sender]);

                try {
                  const direct_message = await sendDM(
                    webhook_payload.entry[0].id,
                    webhook_payload.entry[0].messaging[0].sender.id,
                    aiResponse,
                    automation.User?.integrations[0].token
                  );

                  if (direct_message.status === 200) {
                    const tracked = await trackResponses(automation.id, "DM");

                    if (tracked) {
                      return NextResponse.json(
                        {
                          message: "AI Message sent",
                        },
                        { status: 200 }
                      );
                    }
                  }
                } catch (error) {
                  return NextResponse.json(
                    {
                      message: "Error sending AI response",
                      error:
                        error instanceof Error ? error.message : String(error),
                    },
                    { status: 200 }
                  );
                }
              }
            } catch (error) {
              return NextResponse.json(
                {
                  message: "Error with AI response",
                  error: error instanceof Error ? error.message : String(error),
                },
                { status: 200 }
              );
            }
          }
        }
      }

      // Handle comments with matching keywords
      if (
        webhook_payload.entry[0].changes &&
        webhook_payload.entry[0].changes[0].field === "comments"
      ) {
        const automation = await getKeywordAutomation(
          matcher.automationId,
          false
        );

        // Check if we have a valid integration token
        const hasValidToken =
          automation?.User?.integrations &&
          automation.User.integrations.length > 0 &&
          automation.User.integrations[0].token;

        if (!hasValidToken) {
          return NextResponse.json(
            {
              message: "No valid Instagram integration token found",
              error: "Missing integration token",
            },
            { status: 200 }
          );
        }

        const mediaId = webhook_payload.entry[0].changes[0].value.media.id;

        const automations_post = await getKeywordPost(mediaId, automation?.id!);

        if (automation && automations_post && automation.trigger) {
          // Check if automation type is for genAi or standard response
          const isGenAiResponse = automation.listener?.listener === "SMARTAI";

          if (automation.listener) {
            if (automation.listener.listener === "MESSAGE") {
              try {
                const direct_message = await sendPrivateMessage(
                  webhook_payload.entry[0].id,
                  webhook_payload.entry[0].changes[0].value.id,
                  automation.listener?.prompt || "Thank you for your comment.",
                  automation?.User?.integrations[0].token!
                );

                if (direct_message.status === 200) {
                  const tracked = await trackResponses(
                    automation.id,
                    "COMMENT"
                  );

                  if (tracked) {
                    return NextResponse.json(
                      {
                        message: "Message sent",
                      },
                      { status: 200 }
                    );
                  }
                }
              } catch (error) {
                return NextResponse.json(
                  {
                    message: "Error sending message",
                    error:
                      error instanceof Error ? error.message : String(error),
                  },
                  { status: 200 }
                );
              }
            } else if (
              isGenAiResponse &&
              automation.User?.subscription?.plan === "PRO"
            ) {
              try {
                // Create a Gemini model instance
                const model = genAI.getGenerativeModel({
                  model: "gemini-1.5-flash",
                });

                const prompt = `${automation.listener?.prompt}: keep responses under 2 sentences`;

                const result = await model.generateContent(prompt);
                const response = await result.response;
                const aiResponse = response.text();

                if (aiResponse) {
                  const reciever = createChatHistory(
                    automation.id,
                    webhook_payload.entry[0].id,
                    webhook_payload.entry[0].changes[0].value.from.id,
                    webhook_payload.entry[0].changes[0].value.text,
                    "user"
                  );

                  const sender = createChatHistory(
                    automation.id,
                    webhook_payload.entry[0].id,
                    webhook_payload.entry[0].changes[0].value.from.id,
                    aiResponse,
                    "assistant"
                  );

                  await client.$transaction([reciever, sender]);

                  try {
                    const direct_message = await sendPrivateMessage(
                      webhook_payload.entry[0].id,
                      webhook_payload.entry[0].changes[0].value.id,
                      aiResponse,
                      automation.User?.integrations[0].token
                    );

                    if (direct_message.status === 200) {
                      const tracked = await trackResponses(
                        automation.id,
                        "COMMENT"
                      );

                      if (tracked) {
                        return NextResponse.json(
                          {
                            message: "AI Message sent for comment",
                          },
                          { status: 200 }
                        );
                      }
                    }
                  } catch (error) {
                    return NextResponse.json(
                      {
                        message: "Error sending AI response for comment",
                        error:
                          error instanceof Error
                            ? error.message
                            : String(error),
                      },
                      { status: 200 }
                    );
                  }
                }
              } catch (error) {
                return NextResponse.json(
                  {
                    message: "Error with AI response for comment",
                    error:
                      error instanceof Error ? error.message : String(error),
                  },
                  { status: 200 }
                );
              }
            }
          }
        }
      }
    } else {
      // Only check history if no keyword match was found AND it's a messaging event with text
      if (webhook_payload.entry[0].messaging) {
        const messageText =
          webhook_payload.entry[0].messaging[0]?.message?.text;

        if (messageText) {
          // Only process continued conversations for SMARTAI automations
          try {
            const customer_history = await getChatHistory(
              webhook_payload.entry[0].messaging[0].recipient.id,
              webhook_payload.entry[0].messaging[0].sender.id
            );

            // Only continue if we found history with an automation ID
            if (
              customer_history.history.length > 0 &&
              customer_history.automationId
            ) {
              const automation = await findAutomation(
                customer_history.automationId
              );

              // Only proceed if this is a SMARTAI automation with PRO subscription
              const isGenAiResponse =
                automation?.listener?.listener === "SMARTAI";

              if (
                isGenAiResponse &&
                automation?.User?.subscription?.plan === "PRO"
              ) {
                try {
                  // Create a Gemini model instance
                  const model = genAI.getGenerativeModel({
                    model: "gemini-1.5-flash",
                  });

                  // Convert chat history to format Gemini can use
                  const messageHistory = customer_history.history.map((msg) => {
                    return {
                      role: msg.role === "assistant" ? "model" : "user",
                      parts: [{ text: msg.content }],
                    };
                  });

                  // Add the latest message from user
                  messageHistory.push({
                    role: "user",
                    parts: [
                      {
                        text: messageText,
                      },
                    ],
                  });

                  const chat = model.startChat({
                    history: messageHistory.slice(0, -1),
                    generationConfig: {
                      maxOutputTokens: 200,
                    },
                  });

                  const result = await chat.sendMessage(messageText);
                  const aiResponse = result.response.text();

                  if (aiResponse) {
                    const reciever = createChatHistory(
                      automation.id,
                      webhook_payload.entry[0].id,
                      webhook_payload.entry[0].messaging[0].sender.id,
                      messageText,
                      "user"
                    );

                    const sender = createChatHistory(
                      automation.id,
                      webhook_payload.entry[0].id,
                      webhook_payload.entry[0].messaging[0].sender.id,
                      aiResponse,
                      "assistant"
                    );

                    await client.$transaction([reciever, sender]);

                    try {
                      const direct_message = await sendDM(
                        webhook_payload.entry[0].id,
                        webhook_payload.entry[0].messaging[0].sender.id,
                        aiResponse,
                        automation.User?.integrations[0].token
                      );

                      if (direct_message.status === 200) {
                        return NextResponse.json(
                          {
                            message: "Continued AI Message sent",
                          },
                          { status: 200 }
                        );
                      }
                    } catch (error) {
                      return NextResponse.json(
                        {
                          message: "Error sending continued AI response",
                          error:
                            error instanceof Error
                              ? error.message
                              : String(error),
                        },
                        { status: 200 }
                      );
                    }
                  }
                } catch (error) {
                  return NextResponse.json(
                    {
                      message:
                        "Error with AI response for continued conversation",
                      error:
                        error instanceof Error ? error.message : String(error),
                    },
                    { status: 200 }
                  );
                }
              }
            }
          } catch (error) {
            return NextResponse.json(
              {
                message: "Error retrieving customer history",
                error: error instanceof Error ? error.message : String(error),
              },
              { status: 200 }
            );
          }
        }
      }

      return NextResponse.json(
        {
          message: "No automation set",
        },
        { status: 200 }
      );
    }

    return NextResponse.json(
      {
        message: "No automation set",
      },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      {
        message: "Error processing webhook",
        error: error instanceof Error ? error.message : String(error),
      },
      { status: 200 }
    );
  }
}
