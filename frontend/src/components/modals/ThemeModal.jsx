import Modal from "../Common/Modal";
import { useTheme } from "../../context/ThemeContext";
import "./ThemeModal.css";

function ThemeModal({ open, close }) {
  const { theme, toggleTheme } = useTheme();

  return (
    <Modal isOpen={open} onClose={close} title="Appearance">
      <div className="theme-container">
        <div
          className={`theme-card ${theme === "light" ? "active" : ""}`}
          onClick={() => toggleTheme("light")}
        >
          <h3>☀ Light Mode</h3>

          <p>Bright interface for daytime usage.</p>
        </div>

        <div
          className={`theme-card ${theme === "dark" ? "active" : ""}`}
          onClick={() => toggleTheme("dark")}
        >
          <h3>🌙 Dark Mode</h3>

          <p>Comfortable viewing in low light.</p>
        </div>
      </div>
    </Modal>
  );
}

export default ThemeModal;
