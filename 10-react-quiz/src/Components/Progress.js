function Progress({
  index,
  numberOfQuestions,
  points,
  maximumPoints,
  userAnswer,
}) {
  return (
    <header className="progress">
      <progress
        max={numberOfQuestions}
        value={index + Number(userAnswer !== null)}
      ></progress>

      <p>
        Question <strong>{index + 1}</strong>/{numberOfQuestions}
      </p>

      <p>
        Points:{" "}
        <strong>
          {points}/{maximumPoints}
        </strong>
      </p>
    </header>
  );
}

export default Progress;
