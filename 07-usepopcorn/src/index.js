import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
// import "./index.css";
import App from "./App";
import StarRating from "./StarRating";

const root = createRoot(document.getElementById("root"));
root.render(
    <StrictMode>
        {/* <App /> */}
        <StarRating
            maxRating={5}
            messages={["Terrible", "Okay", "Good", "Great", "Amazing"]}
        />
        <StarRating maxRating={10} className="" />
        <StarRating color="red" size={32} maxRating={20} />
    </StrictMode>
);
