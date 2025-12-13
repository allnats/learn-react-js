// `https://api.frankfurter.app/latest?amount=100&from=EUR&to=USD`

import { useState, useEffect } from "react";

export default function App() {
  const [fromCurrency, setFromCurrency] = useState("USD");
  const [toCurrency, setToCurrency] = useState("USD");
  const [input, setInput] = useState("");
  const [convertedInput, setConvertedInput] = useState("");
  const [convertingLoad, setConvertingLoad] = useState(false);
  const [error, setError] = useState("");

  function handleInputChange(event) {
    setInput(event.target.value);
  }

  useEffect(
    function () {
      const controller = new AbortController();

      setError("");
      async function convertCurrency() {
        try {
          if (toCurrency === fromCurrency) {
            setConvertedInput(Number(input).toFixed(2));
            console.debug("Same currency value.");
            return;
          }

          setConvertingLoad(true);
          const response = await fetch(
            `https://api.frankfurter.dev/v1/latest?amount=${input}&base=${fromCurrency}&symbols=${toCurrency}`,
            { signal: controller.signal }
          );
          setConvertingLoad(false);

          const data = await response.json();
          const convertedValue = data["rates"][toCurrency];
          console.debug(`Converted Value: ${convertedValue}`);
          setConvertedInput(convertedValue.toFixed(2));
        } catch (error) {
          if (error.name !== "AbortError") {
            console.error(error.name);
            setError(error.name);
          }
        } finally {
          setConvertingLoad(false);
        }
      }

      convertCurrency();

      // Use Effect Cleanup
      return function () {
        controller.abort();
      };
    },
    [input, fromCurrency, toCurrency]
  );

  return (
    <div>
      <input type="text" value={input} onChange={handleInputChange} />
      <select onChange={(e) => setFromCurrency(e.target.value)}>
        <option value="USD">USD</option>
        <option value="EUR">EUR</option>
        <option value="CAD">CAD</option>
        <option value="INR">INR</option>
      </select>
      <select onChange={(e) => setToCurrency(e.target.value)}>
        <option value="USD">USD</option>
        <option value="EUR">EUR</option>
        <option value="CAD">CAD</option>
        <option value="INR">INR</option>
      </select>
      <p>{convertingLoad ? "Converting..." : convertedInput}</p>
    </div>
  );
}
