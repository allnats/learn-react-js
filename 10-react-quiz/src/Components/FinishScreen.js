function FinishScreen({ points, maximumPoints, highScore, dispatch }) {
  const percentage = (points / maximumPoints) * 100.0;
  return (
    <>
      <p className="result">
        You scored <strong>{points}</strong> out of {maximumPoints} (
        {Math.ceil(percentage)}%)
      </p>

      <p className="highscore">(Highscore: {highScore} points)</p>

      <button
        className="btn btn-ui"
        onClick={() => dispatch({ type: "restartQuiz" })}
      >
        Restart Quiz
      </button>
    </>
  );
}

export default FinishScreen;
