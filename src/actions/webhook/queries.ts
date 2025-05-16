import { client } from "@/lib/prisma";

export const matchKeyword = async (keyword: string) => {
  // Validate input
  if (!keyword || typeof keyword !== "string") {
    console.log("Invalid keyword input:", keyword);
    return null;
  }

  try {
    // Trim whitespace and normalize the keyword
    const normalizedKeyword = keyword.trim();

    if (!normalizedKeyword) {
      console.log("Empty keyword after normalization");
      return null;
    }

    return await client.keyword.findFirst({
      where: {
        word: {
          equals: normalizedKeyword,
          mode: "insensitive",
        },
      },
    });
  } catch (error) {
    console.error("Error matching keyword:", error);
    return null;
  }
};

export const getKeywordAutomation = async (
  automationId: string,
  dm: boolean
) => {
  if (!automationId) {
    console.log("Missing automationId in getKeywordAutomation");
    return null;
  }

  try {
    const automation = await client.automation.findUnique({
      where: {
        id: automationId,
      },
      include: {
        dms: dm,
        trigger: {
          where: {
            type: dm ? "DM" : "COMMENT",
          },
        },
        listener: true,
        User: {
          select: {
            subscription: {
              select: {
                plan: true,
              },
            },
            integrations: {
              select: {
                token: true,
              },
            },
          },
        },
      },
    });

    if (!automation) {
      console.log(`No automation found with ID: ${automationId}`);
    } else if (!automation.trigger || automation.trigger.length === 0) {
      console.log(
        `No ${
          dm ? "DM" : "COMMENT"
        } trigger found for automation: ${automationId}`
      );
    } else if (!automation.listener) {
      console.log(`No listener found for automation: ${automationId}`);
    }

    return automation;
  } catch (error) {
    console.error(`Error fetching automation ${automationId}:`, error);
    return null;
  }
};

export const trackResponses = async (
  automationId: string,
  type: "COMMENT" | "DM"
) => {
  if (!automationId) {
    console.error("Missing automationId in trackResponses");
    return null;
  }

  try {
    // Check if the listener exists first
    const listener = await client.listener.findUnique({
      where: { automationId },
    });

    if (!listener) {
      console.error(`No listener found for automation ${automationId}`);
      return null;
    }

    if (type === "COMMENT") {
      return await client.listener.update({
        where: { automationId },
        data: {
          commentCount: {
            increment: 1,
          },
        },
      });
    }

    if (type === "DM") {
      return await client.listener.update({
        where: { automationId },
        data: {
          dmCount: {
            increment: 1,
          },
        },
      });
    }

    return null;
  } catch (error) {
    console.error(
      `Error tracking ${type} response for automation ${automationId}:`,
      error
    );
    return null;
  }
};

export const createChatHistory = (
  automationId: string,
  pageId: string, // The page/recipient ID (typically your page ID)
  senderId: string, // The user's ID
  message: string,
  role: "user" | "assistant" = "user" // Default role is user if not specified
) => {
  // Validate inputs to avoid null/undefined values
  if (!automationId || !pageId || !senderId) {
    console.error("Missing required parameters for createChatHistory:", {
      automationId,
      pageId,
      senderId,
      messageLength: message?.length,
    });
    throw new Error("Missing required parameters for chat history");
  }

  // Make sure message is never null
  const safeMessage = message || "";

  return client.dms.create({
    data: {
      Automation: {
        connect: {
          id: automationId,
        },
      },
      senderId: role === "user" ? senderId : pageId,
      reciever: role === "user" ? pageId : senderId,
      message: safeMessage,
      metadata: {
        role,
        timestamp: new Date().toISOString(), // Store creation time for better tracking
        messageType: "text",
      },
    },
  });
};

export const getKeywordPost = async (postId: string, automationId: string) => {
  return await client.post.findFirst({
    where: {
      AND: [{ postid: postId }, { automationId }],
    },
    select: { automationId: true },
  });
};

export const getChatHistory = async (pageId: string, senderId: string) => {
  // Find all messages between these two entities (page and user)
  const history = await client.dms.findMany({
    where: {
      OR: [
        { AND: [{ senderId }, { reciever: pageId }] },
        { AND: [{ senderId: pageId }, { reciever: senderId }] },
      ],
    },
    orderBy: { createdAt: "asc" },
  });

  // Map to the format expected by the AI model
  const chatSession = history.map((chat) => {
    // Parse metadata if it's a string, otherwise use as is
    let metadata: any = chat.metadata;
    if (typeof metadata === "string") {
      try {
        metadata = JSON.parse(metadata);
      } catch {
        metadata = {};
      }
    }

    // First check if we have role metadata
    let role = metadata?.role;

    // If no metadata, determine role based on sender/receiver relationship
    if (!role) {
      role = chat.senderId === senderId ? "user" : "assistant";
    }

    // Ensure message is never null or undefined
    const content = chat.message || "";

    return {
      role,
      content,
      timestamp: chat.createdAt, // Include timestamp for potential debugging
    };
  });

  // Get the automationId from the most recent message if available
  const automationId =
    history.length > 0 ? history[history.length - 1].automationId : null;

  // Make sure the first message is always from a user for Gemini compatibility
  if (chatSession.length > 0 && chatSession[0].role !== "user") {
    // Insert a placeholder message at the beginning
    chatSession.unshift({
      role: "user",
      content: "Start conversation",
      timestamp: new Date(chatSession[0].timestamp.getTime() - 1000), // 1 second before first message
    });
  }

  return {
    history: chatSession,
    automationId,
  };
};
