import "./MenuDropdown.css";
import { FiDownload } from "react-icons/fi";
function MenuDropdown({ onTheme, onFeatures, onAbout, onVoice, onExport }) {
  return (
    <div className="menu-dropdown">
      <button onClick={onExport}>
        <FiDownload />
        Export Chat
      </button>
      <button onClick={onTheme}>🎨 Appearance</button>

      <button onClick={onFeatures}>✨ Features</button>

      <button onClick={onAbout}>ℹ About ARIE</button>
    </div>
  );
}

export default MenuDropdown;
