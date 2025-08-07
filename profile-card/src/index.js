import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { default as App } from "./profile-card.js";
import "./styles.css";

const root = createRoot(document.getElementById("root"));
root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
