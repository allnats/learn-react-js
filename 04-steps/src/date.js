import { useState } from "react";

export default function DateChallenge() {
  const [step, setStep] = useState(1);
  const [count, setCount] = useState(0);

  const currDate = new Date();
  const countDate = currDate.setDate(currDate.getDate() + count);

  return (
    <>
      <input
        type="range"
        min={0}
        max={10}
        value={step}
        onChange={(e) => setStep((c) => Number(e.target.value))}
      ></input>
      <span>{step}</span>
      <div>
        <button
          onClick={() => {
            setCount((c) => c - step);
          }}
        >
          &#8722;
        </button>
        <input
          value={count}
          onChange={(e) => {
            setCount((c) => Number(e.target.value));
          }}
        ></input>
        <button
          onClick={() => {
            setCount((c) => c + step);
          }}
        >
          &#43;
        </button>
      </div>
      <ShowDate dateString={currDate.toDateString()} count={count} />
      <button
        onClick={() => {
          setStep((c) => 1);
          setCount((c) => 0);
        }}
      >
        Reset
      </button>
    </>
  );
}

function ShowDate({ dateString, count }) {
  if (count > 0) return <p>{`${count} days from today is ${dateString}`}</p>;
  if (count < 0)
    return <p>{`${Math.abs(count)} days ago was ${dateString}`}</p>;
  return <p>{`Today is ${dateString}`}</p>;
}
