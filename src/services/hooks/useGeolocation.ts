import { useState, useCallback } from "react";

interface LocationData {
  latitude: number;
  longitude: number;
  address?: string;
}

export const useGeolocation = () => {
  const [location, setLocation] = useState<LocationData | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const getCurrentLocation = useCallback((): Promise<LocationData> => {
    return new Promise((resolve, reject) => {
      if (!navigator.geolocation) {
        const errorMsg = "이 브라우저에서는 위치 서비스를 지원하지 않습니다.";
        setError(errorMsg);
        reject(new Error(errorMsg));
        return;
      }

      setLoading(true);
      setError(null);

      const options = {
        enableHighAccuracy: true,
        timeout: 10000,
        maximumAge: 300000,
      };

      navigator.geolocation.getCurrentPosition(
        async (position) => {
          const locationData = {
            latitude: position.coords.latitude,
            longitude: position.coords.longitude,
            address: "경북 경주시 보문로 338", 
          };
          setLocation(locationData);
          setLoading(false);
          resolve(locationData);
        },
        (error) => {
          let errorMessage = "위치 정보를 가져올 수 없습니다.";

          switch (error.code) {
            case error.PERMISSION_DENIED:
              errorMessage =
                "위치 정보 접근이 거부되었습니다. 브라우저 설정에서 위치 정보 접근을 허용해주세요.";
              break;
            case error.POSITION_UNAVAILABLE:
              errorMessage = "위치 정보를 사용할 수 없습니다.";
              break;
            case error.TIMEOUT:
              errorMessage = "위치 정보 요청 시간이 초과되었습니다.";
              break;
          }
          setError(errorMessage);
          setLoading(false);
          reject(new Error(errorMessage));
        },
        options
      );
    });
  }, []);

  return {
    location,
    loading,
    error,
    getCurrentLocation,
  };
};
