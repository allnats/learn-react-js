import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App";
import DateChallenge from "./date";

const root = createRoot(document.getElementById("root"));
root.render(
  <StrictMode>
    <App />
    <DateChallenge />
  </StrictMode>
);
