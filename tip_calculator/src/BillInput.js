export default function BillInput({ billInput, onBillChange }) {
  function handleBillChange(newBill) {
    onBillChange((currentBill) => Number(newBill));
  }

  return (
    <div>
      <span>How much was the bill?</span>
      <input
        type="number"
        value={billInput}
        onChange={(e) => handleBillChange(e.target.value)}
      ></input>
    </div>
  );
}
