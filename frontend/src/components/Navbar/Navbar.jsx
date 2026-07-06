import { useState, useRef, useEffect } from "react";
import "./Navbar.css";

import { FiMenu, FiPlus, FiMoreVertical } from "react-icons/fi";

import { useChat } from "../../context/ChatContext";

import MenuDropdown from "./MenuDropdown";

import AboutModal from "../Modals/AboutModal";
import FeaturesModal from "../Modals/FeaturesModal";
import ThemeModal from "../Modals/ThemeModal";
import VoiceModal from "../Modals/VoiceModal";

function Navbar() {
  const { createNewChat } = useChat();

  const [showMenu, setShowMenu] = useState(false);

  const [aboutOpen, setAboutOpen] = useState(false);
  const [featuresOpen, setFeaturesOpen] = useState(false);
  const [themeOpen, setThemeOpen] = useState(false);
  const [voiceOpen, setVoiceOpen] = useState(false);

  const menuRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setShowMenu(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <>
      <div className="navbar">
        <div className="navbar-left">
          <button className="icon-btn">
            <FiMenu />
          </button>

          <div className="logo">🤖</div>

          <div className="title">
            <h2>ARIE</h2>

            <span>Your AI Assistant</span>
          </div>
        </div>

        <div className="navbar-right">
          <button className="new-chat-btn" onClick={createNewChat}>
            <FiPlus />
            New Chat
          </button>

          <div className="menu-container" ref={menuRef}>
            <button className="icon-btn" onClick={() => setShowMenu(!showMenu)}>
              <FiMoreVertical />
            </button>

            {showMenu && (
              <MenuDropdown
                onAbout={() => {
                  setAboutOpen(true);
                  setShowMenu(false);
                }}
                onFeatures={() => {
                  setFeaturesOpen(true);
                  setShowMenu(false);
                }}
                onTheme={() => {
                  setThemeOpen(true);
                  setShowMenu(false);
                }}
                onVoice={() => {
                  setVoiceOpen(true);
                  setShowMenu(false);
                }}
              />
            )}
          </div>
        </div>
      </div>

      <AboutModal open={aboutOpen} close={() => setAboutOpen(false)} />

      <FeaturesModal open={featuresOpen} close={() => setFeaturesOpen(false)} />

      <ThemeModal open={themeOpen} close={() => setThemeOpen(false)} />

      <VoiceModal open={voiceOpen} close={() => setVoiceOpen(false)} />
    </>
  );
}

export default Navbar;
