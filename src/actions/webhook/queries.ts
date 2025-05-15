import { client } from '@/lib/prisma'

export const matchKeyword = async (keyword: string) => {
  return await client.keyword.findFirst({
    where: {
      word: {
        equals: keyword,
        mode: 'insensitive',
      },
    },
  })
}

export const getKeywordAutomation = async (
  automationId: string,
  dm: boolean
) => {
  return await client.automation.findUnique({
    where: {
      id: automationId,
    },

    include: {
      dms: dm,
      trigger: {
        where: {
          type: dm ? 'DM' : 'COMMENT',
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
  })
}
export const trackResponses = async (
  automationId: string,
  type: 'COMMENT' | 'DM'
) => {
  if (type === 'COMMENT') {
    return await client.listener.update({
      where: { automationId },
      data: {
        commentCount: {
          increment: 1,
        },
      },
    })
  }

  if (type === 'DM') {
    return await client.listener.update({
      where: { automationId },
      data: {
        dmCount: {
          increment: 1,
        },
      },
    })
  }
}

export const createChatHistory = (
  automationId: string,
  pageId: string, // The page/recipient ID (typically your page ID)
  senderId: string, // The user's ID
  message: string,
  role: "user" | "model" // New role parameter as expected by the webhook
) => {
  return client.dms.create({
    data: {
      Automation: {
        connect: {
          id: automationId,
        },
      },
      senderId: role === "user" ? senderId : pageId,
      reciever: role === "user" ? pageId : senderId,
      message,
      metadata: {
        role,
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
  })
}

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

  // Map to the format expected by the webhook
  const chatSession = history.map((chat: { senderId: string; message: any }) => {
    // Determine role based on sender/receiver relationship
    // If senderId matches the user's ID, it's a user message
    // Otherwise, it's a model/assistant message
    const role = chat.senderId === senderId ? "user" : "model";

    return {
      role: role as "user" | "model",
      content: chat.message || "",
    };
  });

  // Get the automationId from the most recent message if available
  const automationId =
    history.length > 0 ? history[history.length - 1].automationId : null;

  return {
    history: chatSession,
    automationId,
  };
};
