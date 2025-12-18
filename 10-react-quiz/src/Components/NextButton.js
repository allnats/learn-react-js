function NextButton({ dispatch, userAnswer, index, numberOfQuestions }) {
  if (userAnswer === null) return;

  if (index < numberOfQuestions - 1) {
    return (
      <button
        className="btn btn-ui"
        onClick={() => dispatch({ type: "nextQuestion" })}
      >
        Next
      </button>
    );
  }

  if (index === numberOfQuestions - 1) {
    return (
      <button
        className="btn btn-ui"
        onClick={() => dispatch({ type: "setFinish" })}
      >
        Finish
      </button>
    );
  }
}

export default NextButton;
