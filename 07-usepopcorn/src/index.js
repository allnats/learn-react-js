import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
// import "./index.css";
import App from "./App";
import StarRating from "./StarRating";

const root = createRoot(document.getElementById("root"));
root.render(
  <StrictMode>
    {/* <App /> */}
    <StarRating maxRating={5} />
    <StarRating maxRating={10} />
    <StarRating />
  </StrictMode>
);
