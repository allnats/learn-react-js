import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { default as App } from "./pizzaApp.js";
import "./index.css";

// React v18
const root = createRoot(document.getElementById("root"));
root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
