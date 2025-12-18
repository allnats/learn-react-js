function Options({ question, userAnswer, dispatch }) {
  const hasAnswered = userAnswer !== null;

  return (
    <div className="options">
      {question.options.map((option, index) => (
        <button
          className={`btn btn-option ${index === userAnswer && "answer"}
          ${
            hasAnswered
              ? index === question.correctOption
                ? "correct"
                : "wrong"
              : ""
          }`}
          disabled={hasAnswered}
          onClick={() => dispatch({ type: "setUserAnswer", payload: index })}
          key={option}
        >
          {option}
        </button>
      ))}
    </div>
  );
}

export default Options;
