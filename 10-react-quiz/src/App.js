import { useEffect, useReducer } from "react";
import Header from "./Header";
import Main from "./Main";

const initialState = {
  question: [],
  // Possible app states: loading, error, ready, active, and finished.
  status: "loading",
};

// Main reducer function
function reducer(state, action) {
  const { type, payload } = action;
  switch (type) {
    case "dataReceived":
      return { ...state, question: payload, status: "ready" };
    case "dataFetchError":
      return { ...state, status: "error" };
    default:
      throw new Error("Invalid dispatch type");
  }
}

export default function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  // Effect that fetches the questions from an API (json server).
  useEffect(function () {
    async function fetchQuestions() {
      try {
        const response = await fetch("http://localhost:8000/questions");
        const questions = await response.json();
        dispatch({ type: "dataReceived", payload: questions });
        // Debug
        console.debug(questions);
      } catch (fetchError) {
        console.error(`Error fetching question API: ${fetchError.message}`);
        dispatch({ type: "dataFetchError" });
      }
    }
    fetchQuestions();
  }, []);

  // App's JSX structure.
  return (
    <div className="app">
      <Header />
      <Main>
        <p>Hello World</p>
      </Main>
    </div>
  );
}
