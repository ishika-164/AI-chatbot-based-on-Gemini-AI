import { useState } from "react";
import "./ChatInput.css";
import { FiMic, FiSend } from "react-icons/fi";
import useRecorder from "../../hooks/useRecorder";

function ChatInput({ onSend }) {
  const [message, setMessage] = useState("");

  const { isRecording, startRecording, stopRecording } = useRecorder((text) => {
    setMessage((prev) => prev + text);
  });

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
        className={`mic-btn ${isRecording ? "listening" : ""}`}
        onClick={() => {
          if (isRecording) {
            stopRecording();
          } else {
            startRecording();
          }
        }}
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
