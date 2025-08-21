import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { default as App } from "./TipCalculator";

const root = createRoot(document.getElementById("root"));
root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
