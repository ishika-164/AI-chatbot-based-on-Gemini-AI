import { createContext, useContext, useState } from "react";

const ChatContext = createContext();

export const ChatProvider = ({ children }) => {
  const [chats, setChats] = useState([
    {
      id: 1,
      title: "New Chat",
      messages: [],
    },
  ]);

  const [activeChatId, setActiveChatId] = useState(1);

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

    if (activeChatId === id) {
      setActiveChatId(updatedChats[0].id);
    }
  };

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
