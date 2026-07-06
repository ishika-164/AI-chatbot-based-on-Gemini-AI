import "./Welcome.css";
import { FaRobot } from "react-icons/fa";
import {
  MdCode,
  MdLightbulb,
  MdArticle,
  MdQuestionAnswer,
} from "react-icons/md";

function Welcome() {
  return (
    <div className="welcome">
      <div className="welcome-card">
        <div className="robot-circle">
          <FaRobot />
        </div>

        <h1>Hello, I'm ARIE 👋</h1>

        <p>
          Your personal AI assistant. Ask me anything, generate code, explain
          concepts, or brainstorm ideas.
        </p>

        <div className="suggestions">
          <div className="suggestion-card">
            <MdCode />
            <span>Write Java Code</span>
          </div>

          <div className="suggestion-card">
            <MdArticle />
            <span>Summarize Notes</span>
          </div>

          <div className="suggestion-card">
            <MdLightbulb />
            <span>Generate Ideas</span>
          </div>

          <div className="suggestion-card">
            <MdQuestionAnswer />
            <span>Ask Anything</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Welcome;
