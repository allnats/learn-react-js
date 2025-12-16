import { useState } from "react";
import { useGeolocation } from "./useGeolocation";

export default function App() {
  // const [isLoading, setIsLoading] = useState(false);
  const [countClicks, setCountClicks] = useState(0);
  const { coordinates, getLocation, isLoading, error } = useGeolocation();
  // const [position, setPosition] = useState({});
  // const [error, setError] = useState(null);

  const { latitude, longitude } = coordinates;

  async function handleClick() {
    setCountClicks((count) => count + 1);
    await getLocation();
  }

  return (
    <div>
      <button onClick={handleClick} disabled={isLoading}>
        Get my position
      </button>

      {isLoading && <p>Loading position...</p>}
      {error && <p>{error}</p>}
      {!isLoading && !error && latitude && longitude && (
        <p>
          Your GPS position:{" "}
          <a
            target="_blank"
            rel="noreferrer"
            href={`https://www.openstreetmap.org/#map=16/${latitude}/${longitude}`}
          >
            {latitude}, {longitude}
          </a>
        </p>
      )}

      <p>You requested position {countClicks} times</p>
    </div>
  );
}
