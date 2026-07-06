import { useState } from "react";
import "./ChatInput.css";
import { FiMic, FiSend } from "react-icons/fi";
import useSpeechRecognition from "../../hooks/useSpeechRecognition";

function ChatInput({ onSend }) {
  const [message, setMessage] = useState("");

  const { isListening, supported, toggleListening } = useSpeechRecognition(
    (text) => {
      setMessage((prev) => {
        if (prev.trim() === "") return text;

        return prev + " " + text;
      });
    },
  );

  const handleSend = () => {
    if (!message.trim()) return;

    onSend(message);

    setMessage("");
  };

  return (
    <div className="chat-input">
      <input
        type="text"
        placeholder="Ask ARIE anything..."
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            e.preventDefault();
            handleSend();
          }
        }}
      />

      <button
        className={`mic-btn ${isListening ? "listening" : ""}`}
        onClick={toggleListening}
        disabled={!supported}
        title={
          supported ? "Start Voice Input" : "Speech Recognition Not Supported"
        }
      >
        <FiMic />
      </button>

      <button className="send-btn" onClick={handleSend}>
        <FiSend />
      </button>
    </div>
  );
}

export default ChatInput;
