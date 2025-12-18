import { useEffect, useReducer } from "react";
import Header from "./Header";
import Loader from "./Loader";
import Error from "./Error";
import StartScreen from "./StartScreen";
import Question from "./Question";
import NextButton from "./NextButton";
import Progress from "./Progress";
import FinishScreen from "./FinishScreen";
import Main from "./Main";

const initialState = {
  questions: [],
  // Possible app states: loading, error, ready, active, and finished.
  status: "loading",
  index: 0,
  userAnswer: null,
  points: 0,
  highScore: 0,
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
    case "setUserAnswer": {
      const question = state.questions.at(state.index);
      const { correctOption, points } = question;
      const isUserCorrect = correctOption === payload;
      return {
        ...state,
        userAnswer: payload,
        points: isUserCorrect ? state.points + points : state.points,
      };
    }
    case "nextQuestion":
      return { ...state, index: state.index + 1, userAnswer: null };
    case "setFinish": {
      const highScore =
        state.points > state.highScore ? state.points : state.highScore;
      return { ...state, status: "finished", highScore };
    }
    case "restartQuiz":
      return { ...initialState, questions: state.questions, status: "ready" };
    default:
      throw new Error("Invalid dispatch type");
  }
}

export default function App() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const { questions, status, index, userAnswer, points, highScore } = state;
  const numberOfQuestions = questions.length;
  const maximumPoints = questions.reduce(
    (accumulator, question) => accumulator + question.points,
    0
  );

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
            numberOfQuestions={numberOfQuestions}
            dispatch={dispatch}
          />
        )}
        {status === "active" && (
          <>
            <Progress
              index={index}
              numberOfQuestions={numberOfQuestions}
              points={points}
              maximumPoints={maximumPoints}
              userAnswer={userAnswer}
            />
            <Question
              question={questions.at(index)}
              userAnswer={userAnswer}
              dispatch={dispatch}
            />

            <NextButton
              dispatch={dispatch}
              userAnswer={userAnswer}
              index={index}
              numberOfQuestions={numberOfQuestions}
            />
          </>
        )}
        {status === "finished" && (
          <FinishScreen
            points={points}
            maximumPoints={maximumPoints}
            highScore={highScore}
            dispatch={dispatch}
          />
        )}
      </Main>
    </div>
  );
}
