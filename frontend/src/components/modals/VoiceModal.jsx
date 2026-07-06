import Modal from "../Common/Modal";

function VoiceModal({ open, close }) {
  return (
    <Modal isOpen={open} onClose={close} title="Voice Input">
      <p>Speak naturally and ARIE converts your speech into text.</p>

      <br />

      <label>Language</label>

      <br />

      <select>
        <option>English (India)</option>

        <option>English (US)</option>

        <option>Hindi</option>
      </select>

      <br />
      <br />

      <label>
        <input type="checkbox" />
        Automatically send after speaking
      </label>
    </Modal>
  );
}

export default VoiceModal;
