import { useEffect, useReducer } from "react";
import Header from "./Header";
import Loader from "./Loader";
import Error from "./Error";
import StartScreen from "./StartScreen";
import Question from "./Question";
import Main from "./Main";

const initialState = {
  questions: [],
  // Possible app states: loading, error, ready, active, and finished.
  status: "loading",
  index: 0,
};

// Main reducer function
function reducer(state, action) {
  const { type, payload } = action;
  switch (type) {
    case "dataReceived":
      return { ...state, questions: payload, status: "ready" };
    case "dataFetchError":
      return { ...state, status: "error" };
    case "start":
      return { ...state, status: "active", index: 0 };
    default:
      throw new Error("Invalid dispatch type");
  }
}

export default function App() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const { questions, status } = state;
  const numberOfQuestions = questions.length;

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
        {status === "loading" && <Loader />}
        {status === "error" && <Error />}
        {status === "ready" && (
          <StartScreen
            numberofQuestions={numberOfQuestions}
            dispatch={dispatch}
          />
        )}
        {status === "active" && <Question />}
      </Main>
    </div>
  );
}
