import Modal from "../Common/Modal";

function FeaturesModal({ open, close }) {
  return (
    <Modal isOpen={open} onClose={close} title="ARIE Features">
      <ul>
        <li>✅ Real-Time AI Conversations</li>

        <li>✅ Multiple Chat Sessions</li>

        <li>✅ Code Syntax Highlighting</li>

        <li>✅ Voice Input</li>

        <li>✅ Responsive UI</li>

        <li>✅ Spring Boot Backend</li>

        <li>✅ Gemini AI Powered</li>
      </ul>
    </Modal>
  );
}

export default FeaturesModal;
