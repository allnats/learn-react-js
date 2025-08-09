import { useState } from "react";

export default function DateChallenge() {
  const [step, setStep] = useState(1);
  const [count, setCount] = useState(0);

  function handleStepPlus() {
    setStep((s) => s + 1);
  }

  function handleStepMinus() {
    setStep((s) => s - 1);
  }

  function handleCountPlus() {
    setCount((c) => c + step);
  }

  function handleCountMinus() {
    setCount((c) => c - step);
  }

  const currDate = new Date();
  const countDate = currDate.setDate(currDate.getDate() + count);
  return (
    <>
      <div>
        <button onClick={handleStepMinus}>&#8722;</button>
        <span>{`Step: ${step}`}</span>
        <button onClick={handleStepPlus}>&#43;</button>
      </div>
      <div>
        <button onClick={handleCountMinus}>&#8722;</button>
        <span>{`Count: ${count}`}</span>
        <button onClick={handleCountPlus}>&#43;</button>
      </div>
      <ShowDate dateString={currDate.toDateString()} count={count} />
    </>
  );
}

function ShowDate({ dateString, count }) {
  if (count > 1) return <p>{`${count} days from today is ${dateString}`}</p>;
  if (count < 0) return <p>{`${count} days ago today was ${dateString}`}</p>;
  return <p>{`Today is ${dateString}`}</p>;
}
