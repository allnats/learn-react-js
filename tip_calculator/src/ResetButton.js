export default function ResetButton({
  onBillChange,
  onYourTipChange,
  onFriendTipChange,
}) {
  function handleButtonClick() {
    onBillChange(0);
    onYourTipChange(0.0);
    onFriendTipChange(0.0);
  }

  return <button onClick={handleButtonClick}>Reset</button>;
}
