import { useState } from "react";

import Navbar from "../components/Navbar/Navbar";
import Sidebar from "../components/Sidebar/Sidebar";
import Welcome from "../components/Welcome/Welcome";
import ChatWindow from "../components/ChatWindow/ChatWindow";
import ChatInput from "../components/ChatInput/ChatInput";

import "./Home.css";

import { sendMessageToGemini } from "../services/chatService";
import { useChat } from "../context/ChatContext";

function Home() {
  const [loading, setLoading] = useState(false);

  const { activeChat, addMessage } = useChat();

  const handleSendMessage = async (text) => {
    if (!text.trim()) return;

    setLoading(true);

    // User Message
    addMessage("user", text);

    // Gemini Response
    const reply = await sendMessageToGemini(text);

    addMessage("bot", reply);

    setLoading(false);
  };

  return (
    <div className="home">
      <Sidebar />

      <div className="main">
        <Navbar />

        {activeChat.messages.length === 0 ? (
          <Welcome />
        ) : (
          <ChatWindow messages={activeChat.messages} loading={loading} />
        )}

        <ChatInput onSend={handleSendMessage} />
      </div>
    </div>
  );
}

export default Home;
