import { useState } from "react";
import "./Sidebar.css";

import { FiMessageSquare, FiTrash2, FiSearch } from "react-icons/fi";

import { useChat } from "../../context/ChatContext";

function Sidebar() {
  const { chats, activeChatId, setActiveChatId, deleteChat } = useChat();

  const [search, setSearch] = useState("");

  const filteredChats = chats.filter((chat) =>
    chat.title.toLowerCase().includes(search.toLowerCase()),
  );

  return (
    <div className="sidebar">
      <div className="sidebar-header">
        <h2>ARIE</h2>
        <p>AI Assistant</p>
      </div>

      <div className="search-box">
        <FiSearch className="search-icon" />

        <input
          type="text"
          placeholder="Search chats..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      <div className="chat-list">
        {filteredChats.length === 0 ? (
          <p className="no-chat">No chats found</p>
        ) : (
          filteredChats.map((chat) => (
            <div
              key={chat.id}
              className={
                activeChatId === chat.id ? "chat-item active" : "chat-item"
              }
            >
              <div
                className="chat-info"
                onClick={() => setActiveChatId(chat.id)}
              >
                <FiMessageSquare />

                <span>{chat.title}</span>
              </div>

              <button
                className="delete-btn"
                onClick={() => deleteChat(chat.id)}
              >
                <FiTrash2 />
              </button>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default Sidebar;
