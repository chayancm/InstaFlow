import { findAutomation } from "@/actions/automations/queries";
import {
  createChatHistory,
  getChatHistory, // NOW ASSUMED TO RETURN { history: Array<{role: 'user' | 'model', content: string}>, automationId: string|null }
  getKeywordAutomation,
  getKeywordPost,
  matchKeyword,
  trackResponses,
} from "@/actions/webhook/queries";
import { sendDM, sendPrivateMessage } from "@/lib/fetch";
// Import the GoogleGenerativeAI class
import {
  GoogleGenerativeAI,
  HarmCategory,
  HarmBlockThreshold,
  GenerationConfig,
  Content,
} from "@google/generative-ai";
import { client } from "@/lib/prisma"; // Assuming Prisma client for DB operations
import { NextRequest, NextResponse } from "next/server";

// --- Gemini API Configuration ---
const GEMINI_API_KEY = process.env.GEMINI_API_KEY;
if (!GEMINI_API_KEY) {
  console.error(
    "Gemini API key is missing. Please set GEMINI_API_KEY environment variable."
  );
  // Consider throwing an error or having a fallback for critical failure
}

const genAI = new GoogleGenerativeAI(GEMINI_API_KEY || "");
const geminiModel = genAI.getGenerativeModel({
  model: "gemini-1.5-flash-latest", // Or your preferred Gemini model
  // Global safety settings and generation config can be set here or per request
  safetySettings: [
    {
      category: HarmCategory.HARM_CATEGORY_HARASSMENT,
      threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE,
    },
    {
      category: HarmCategory.HARM_CATEGORY_HATE_SPEECH,
      threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE,
    },
    {
      category: HarmCategory.HARM_CATEGORY_SEXUALLY_EXPLICIT,
      threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE,
    },
    {
      category: HarmCategory.HARM_CATEGORY_DANGEROUS_CONTENT,
      threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE,
    },
  ],
  generationConfig: {
    // maxOutputTokens: 250, // Example: Default max tokens
    // temperature: 0.7,    // Example: Default temperature
  },
});

/**
 * Prepares the chat history and new message for the Gemini API.
 * @param baseInstruction The base prompt/instruction for the AI (e.g., persona, task).
 * @param persistedHistory An array of past messages { role: 'user' | 'model', content: string }.
 * @param newUserMessageText Optional new message from the user.
 * @returns Array of Content objects for Gemini API.
 */
const buildGeminiMessages = (
  baseInstruction: string, // e.g., "You are a helpful assistant. Keep responses under 2 sentences."
  persistedHistory: Array<{ role: "user" | "model"; content: string }>,
  newUserMessageText?: string
): Content[] => {
  const messages: Content[] = [];

  // Add persisted history, ensuring roles are 'user' or 'model'
  persistedHistory.forEach((msg) => {
    messages.push({
      role: msg.role, // Directly use 'user' or 'model' from stored history
      parts: [{ text: msg.content }],
    });
  });

  // Add the new user message, prepending the base instruction if it's the start of a "turn"
  // or if history is empty.
  if (newUserMessageText) {
    let finalUserMessageText = newUserMessageText;
    // If history is empty OR the last message was from the model, this is a new "turn" for the user.
    // This is a simple way to ensure the instruction is considered with the new input.
    // More sophisticated instruction handling might involve specific system prompt features if available.
    if (
      baseInstruction &&
      (messages.length === 0 || messages[messages.length - 1]?.role === "model")
    ) {
      finalUserMessageText = `${baseInstruction}. User asks: ${newUserMessageText}`;
    }
    messages.push({
      role: "user",
      parts: [{ text: finalUserMessageText }],
    });
  } else if (baseInstruction && messages.length === 0) {
    // If there's only a base instruction and no specific user message (e.g., initial prompt for SMARTAI)
    // We send this instruction as the first user message to guide the AI.
    messages.push({
      role: "user",
      parts: [{ text: baseInstruction }],
    });
  }

  // Safety net: If messages is still empty and there's a base instruction, use it.
  // This covers cases where there's no persisted history and no new user text but an automation prompt.
  if (messages.length === 0 && baseInstruction) {
    messages.push({ role: "user", parts: [{ text: baseInstruction }] });
  }

  return messages;
};

export async function GET(req: NextRequest) {
  const hub = req.nextUrl.searchParams.get("hub.challenge");
  return new NextResponse(hub);
}

export async function POST(req: NextRequest) {
  if (!GEMINI_API_KEY) {
    console.error("Webhook POST failed: Gemini API key not configured.");
    return NextResponse.json(
      { message: "AI service not configured." },
      { status: 500 }
    );
  }
  const webhook_payload = await req.json();
  let matcher;

  try {
    const messageEntry = webhook_payload.entry?.[0]?.messaging?.[0];
    const changesEntry = webhook_payload.entry?.[0]?.changes?.[0];

    if (messageEntry?.message?.text) {
      matcher = await matchKeyword(messageEntry.message.text);
    } else if (changesEntry?.value?.text) {
      matcher = await matchKeyword(changesEntry.value.text);
    }

    if (matcher && matcher.automationId) {
      console.log("Matched keyword for automation:", matcher.automationId);

      if (messageEntry) {
        // Direct Message scenario
        const automation = await getKeywordAutomation(
          matcher.automationId,
          true
        );
        if (!automation?.trigger || !automation.listener)
          return NextResponse.json(
            { message: "Automation not fully configured." },
            { status: 200 }
          );

        const senderId = messageEntry.sender.id;
        const pageId = messageEntry.recipient.id; // Or webhook_payload.entry[0].id based on your setup
        const userToken = automation.User?.integrations[0]?.token;

        if (!userToken)
          return NextResponse.json(
            { message: "User integration token missing." },
            { status: 200 }
          );

        if (automation.listener.listener === "MESSAGE") {
          const dmResponse = await sendDM(
            pageId,
            senderId,
            automation.listener.prompt,
            userToken
          );
          if (dmResponse.status === 200) {
            await trackResponses(automation.id, "DM");
            return NextResponse.json(
              { message: "Message sent" },
              { status: 200 }
            );
          }
        } else if (
          automation.listener.listener === "SMARTAI" &&
          automation.User?.subscription?.plan === "PRO"
        ) {
          const instruction = `${automation.listener.prompt}: Keep responses under 2 sentences.`;
          // For a keyword match, the history is empty. The user's message IS the new message.
          const geminiMessages = buildGeminiMessages(
            instruction,
            [],
            messageEntry.message.text
          );

          if (geminiMessages.length === 0) {
            console.log("No messages to send to Gemini for DM keyword match.");
            return NextResponse.json(
              { message: "Could not formulate AI prompt." },
              { status: 200 }
            );
          }

          const result = await geminiModel.generateContent({
            contents: geminiMessages,
          });
          const aiResponseText = result.response.text();

          if (aiResponseText) {
            await client.$transaction([
              createChatHistory(
                automation.id,
                pageId,
                senderId,
                messageEntry.message.text,
                "user"
              ),
              createChatHistory(
                automation.id,
                pageId,
                senderId,
                aiResponseText,
                "model"
              ),
            ]);
            const dmSent = await sendDM(
              pageId,
              senderId,
              aiResponseText,
              userToken
            );
            if (dmSent.status === 200) {
              await trackResponses(automation.id, "DM");
              return NextResponse.json(
                { message: "AI Message sent" },
                { status: 200 }
              );
            }
          }
        }
      } else if (changesEntry?.field === "comments") {
        // Comment scenario
        const automation = await getKeywordAutomation(
          matcher.automationId,
          false
        );
        if (!automation?.trigger || !automation.listener)
          return NextResponse.json(
            { message: "Automation for comment not fully configured." },
            { status: 200 }
          );

        const commenterId = changesEntry.value.from.id;
        const commentId = changesEntry.value.id;
        const mediaId = changesEntry.value.media.id;
        const pageScopeId = webhook_payload.entry[0].id; // ID for page/profile
        const userToken = automation.User?.integrations[0]?.token;

        if (!userToken)
          return NextResponse.json(
            { message: "User integration token missing for comment reply." },
            { status: 200 }
          );

        const automations_post = await getKeywordPost(mediaId, automation.id);
        if (!automations_post)
          return NextResponse.json(
            { message: "Automation not linked to this post." },
            { status: 200 }
          );

        if (automation.listener.listener === "MESSAGE") {
          const privateReply = await sendPrivateMessage(
            pageScopeId,
            commentId,
            automation.listener.prompt,
            userToken
          );
          if (privateReply.status === 200) {
            await trackResponses(automation.id, "COMMENT");
            return NextResponse.json(
              { message: "Private reply to comment sent" },
              { status: 200 }
            );
          }
        } else if (
          automation.listener.listener === "SMARTAI" &&
          automation.User?.subscription?.plan === "PRO"
        ) {
          const instruction = `${automation.listener.prompt}: Keep responses under 2 sentences.`;
          // For comments, history is typically not threaded unless specifically implemented.
          const geminiMessages = buildGeminiMessages(
            instruction,
            [],
            changesEntry.value.text
          );

          if (geminiMessages.length === 0) {
            console.log(
              "No messages to send to Gemini for comment keyword match."
            );
            return NextResponse.json(
              { message: "Could not formulate AI prompt for comment." },
              { status: 200 }
            );
          }

          const result = await geminiModel.generateContent({
            contents: geminiMessages,
          });
          const aiResponseText = result.response.text();

          if (aiResponseText) {
            // Storing history for comment interaction
            // Using pageScopeId as the 'pageId' context for the chat history entry
            await client.$transaction([
              createChatHistory(
                automation.id,
                pageScopeId,
                commenterId,
                changesEntry.value.text,
                "user"
              ),
              createChatHistory(
                automation.id,
                pageScopeId,
                commenterId,
                aiResponseText,
                "model"
              ),
            ]);
            const privateReplySent = await sendPrivateMessage(
              pageScopeId,
              commentId,
              aiResponseText,
              userToken
            );
            if (privateReplySent.status === 200) {
              await trackResponses(automation.id, "COMMENT");
              return NextResponse.json(
                { message: "AI Private reply to comment sent" },
                { status: 200 }
              );
            }
          }
        }
      }
    } else if (messageEntry) {
      // No keyword match, check for ongoing SMARTAI conversation in DMs
      const recipientId = messageEntry.recipient.id; // Your Page ID
      const senderId = messageEntry.sender.id; // User's ID

      // getChatHistory should return { history: Array<{role: 'user' | 'model', content: string}>, automationId: string|null }
      const conversation = await getChatHistory(recipientId, senderId);

      if (conversation.history.length > 0 && conversation.automationId) {
        const automation = await findAutomation(conversation.automationId);

        if (
          automation?.User?.subscription?.plan === "PRO" &&
          automation.listener?.listener === "SMARTAI"
        ) {
          const instruction = `${automation.listener.prompt}: Keep responses under 2 sentences.`;
          const currentUserMessage = messageEntry.message.text;
          const userToken = automation.User?.integrations[0]?.token;

          if (!userToken)
            return NextResponse.json(
              { message: "User integration token missing for follow-up." },
              { status: 200 }
            );

          // `conversation.history` is already in the correct format {role: 'user'|'model', content: string}
          const geminiMessages = buildGeminiMessages(
            instruction,
            conversation.history,
            currentUserMessage
          );

          if (geminiMessages.length === 0) {
            console.log("No messages to send to Gemini for DM follow-up.");
            return NextResponse.json(
              { message: "Could not formulate AI prompt for follow-up." },
              { status: 200 }
            );
          }

          const result = await geminiModel.generateContent({
            contents: geminiMessages,
          });
          const aiResponseText = result.response.text();

          if (aiResponseText) {
            await client.$transaction([
              createChatHistory(
                automation.id,
                recipientId,
                senderId,
                currentUserMessage,
                "user"
              ),
              createChatHistory(
                automation.id,
                recipientId,
                senderId,
                aiResponseText,
                "model"
              ),
            ]);
            const dmSent = await sendDM(
              recipientId,
              senderId,
              aiResponseText,
              userToken
            );
            if (dmSent.status === 200) {
              return NextResponse.json(
                { message: "AI Follow-up message sent" },
                { status: 200 }
              );
            }
          }
        }
      }
    }

    // Default response if no specific action was taken
    return NextResponse.json(
      { message: "No specific automation triggered or conditions met." },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error in POST webhook:", error);
    const errorMessage = error instanceof Error ? error.message : String(error);
    return NextResponse.json(
      { message: "Error processing request.", error: errorMessage },
      { status: 500 }
    );
  }
}
