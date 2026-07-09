import { createContext, useContext, useEffect, useState } from "react";

const ChatContext = createContext();

export const ChatProvider = ({ children }) => {
  const defaultChats = [
    {
      id: 1,
      title: "New Chat",
      messages: [],
    },
  ];

  const [chats, setChats] = useState(() => {
    const saved = localStorage.getItem("arie_chats");

    return saved ? JSON.parse(saved) : defaultChats;
  });

  const [activeChatId, setActiveChatId] = useState(() => {
    const saved = localStorage.getItem("arie_active_chat");

    return saved ? JSON.parse(saved) : 1;
  });

  const activeChat = chats.find((chat) => chat.id === activeChatId);

  // Create a new chat
  const createNewChat = () => {
    const newChat = {
      id: Date.now(),
      title: "New Chat",
      messages: [],
    };

    setChats((prev) => [...prev, newChat]);
    setActiveChatId(newChat.id);
  };

  // Add a message
  const addMessage = (sender, text) => {
    setChats((prev) =>
      prev.map((chat) => {
        if (chat.id !== activeChatId) return chat;

        let title = chat.title;

        // First user message becomes title
        if (sender === "user" && chat.messages.length === 0) {
          title = text.length > 25 ? text.substring(0, 25) + "..." : text;
        }

        return {
          ...chat,
          title,
          messages: [...chat.messages, { sender, text }],
        };
      }),
    );
  };

  // Delete chat
  const deleteChat = (id) => {
    if (chats.length === 1) return;

    const updatedChats = chats.filter((chat) => chat.id !== id);

    setChats(updatedChats);

    if (updatedChats.length > 0) {
      setActiveChatId(updatedChats[0].id);
    }
    if (updatedChats.length === 0) {
      const newChat = {
        id: Date.now(),
        title: "New Chat",
        messages: [],
      };

      setChats([newChat]);
      setActiveChatId(newChat.id);
    }

    if (activeChatId === id) {
      setActiveChatId(updatedChats[0].id);
    }
  };
  useEffect(() => {
    localStorage.setItem("arie_chats", JSON.stringify(chats));
  }, [chats]);

  useEffect(() => {
    localStorage.setItem("arie_active_chat", JSON.stringify(activeChatId));
  }, [activeChatId]);

  return (
    <ChatContext.Provider
      value={{
        chats,
        activeChat,
        activeChatId,
        setActiveChatId,
        createNewChat,
        addMessage,
        deleteChat,
      }}
    >
      {children}
    </ChatContext.Provider>
  );
};

export const useChat = () => useContext(ChatContext);
