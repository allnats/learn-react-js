export default function TipSelect({ tip, onTipChange, tipOptions, children }) {
  function handleTipChange(newTip) {
    onTipChange((currentTip) => Number(newTip));
  }

  return (
    <div>
      <span>{children}</span>
      <select value={tip} onChange={(e) => handleTipChange(e.target.value)}>
        {Object.entries(tipOptions).map(([key, option]) => (
          <option key={key} value={option.value}>
            {option.text}
          </option>
        ))}
      </select>
    </div>
  );
}
