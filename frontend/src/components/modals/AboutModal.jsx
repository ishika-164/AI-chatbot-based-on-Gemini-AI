import Modal from "../Common/Modal";

function AboutModal({ open, close }) {
  return (
    <Modal isOpen={open} onClose={close} title="About ARIE">
      <h3>🤖 ARIE AI Assistant</h3>

      <p>
        ARIE (Artificial Responsive Intelligence Engine) is an AI-powered
        chatbot capable of answering questions, generating code, assisting with
        programming, content writing, and problem solving.
      </p>

      <h4>Built With</h4>

      <ul>
        <li>React.js</li>

        <li>Spring Boot</li>

        <li>Gemini AI API</li>

        <li>REST APIs</li>

        <li>Markdown Rendering</li>

        <li>Syntax Highlighting</li>
      </ul>

      <p>
        <b>Version:</b> 1.0.0
      </p>

      <p>
        <b>Developer:</b> Ishika Choudhary
      </p>
    </Modal>
  );
}

export default AboutModal;
