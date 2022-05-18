import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import styles from "@chatscope/chat-ui-kit-styles/dist/default/styles.min.css";
import "./index.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);
