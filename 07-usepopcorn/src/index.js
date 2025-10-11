import { StrictMode, useState } from "react";
import { createRoot } from "react-dom/client";
// import "./index.css";
import App from "./App";
import StarRating from "./StarRating";

function Test() {
    const [movieRating, setMovieRating] = useState(0);

    return (
        <div>
            <StarRating color="blue" onSetRating={setMovieRating} />
            <p>This movie was rated {movieRating} stars</p>
        </div>
    );
}

const root = createRoot(document.getElementById("root"));
root.render(
    <StrictMode>
        {/* <App /> */}
        <StarRating
            maxRating={5}
            messages={["Terrible", "Okay", "Good", "Great", "Amazing"]}
            defaultRating={3}
        />
        <StarRating maxRating={"sss"} className="" />
        <StarRating color="red" size={32} maxRating={20} />

        <Test />
    </StrictMode>
);
