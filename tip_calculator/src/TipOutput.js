export default function TipOutput({ bill, yourTip, friendTip }) {
  const tipAvg = (yourTip + friendTip) / 2.0;
  const totalTip = bill * tipAvg;
  const totalPayment = bill * (1 + tipAvg);

  return (
    <h2>
      You pay ${Math.trunc(totalPayment)} (${bill} + ${Math.trunc(totalTip)}{" "}
      tip)
    </h2>
  );
}
