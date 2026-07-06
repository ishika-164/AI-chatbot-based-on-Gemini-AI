import "./MenuDropdown.css";

function MenuDropdown({ onTheme, onFeatures, onAbout }) {
  return (
    <div className="menu-dropdown">
      <button onClick={onTheme}>🎨 Appearance</button>

      <button onClick={onFeatures}>✨ Features</button>

      <button onClick={onAbout}>ℹ About ARIE</button>
    </div>
  );
}

export default MenuDropdown;
