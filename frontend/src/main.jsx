import React from "react";
import ReactDOM from "react-dom/client";

import App from "./App";
import "./index.css";

import { ChatProvider } from "./context/ChatContext";
import { ThemeProvider } from "./context/ThemeContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <ThemeProvider>
    <ChatProvider>
      <App />
    </ChatProvider>
  </ThemeProvider>,
);
