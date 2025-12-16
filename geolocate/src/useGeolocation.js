import { useState } from "react";

export function useGeolocation() {
  const [coordinates, setCoordinates] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  async function getLocation() {
    try {
      setIsLoading(true);
      setError(null);
      const currentPosition = await getCurrentPositionAsync();
      const { latitude, longitude } = currentPosition.coords;
      setCoordinates({ latitude, longitude });
    } catch (error) {
      setError(error.message);
    } finally {
      setIsLoading(false);
    }
  }

  function getCurrentPositionAsync() {
    return new Promise((resolve, reject) => {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(resolve, reject);
      } else {
        reject(new Error("Geolocation not supported."));
      }
    });
  }

  return {
    coordinates,
    getLocation,
    isLoading,
    error,
  };
}
