import { createContext, useState } from "react";

export const GeolocationContext = createContext();

export default function GeolocationProvider({ children }) {
  const [modalMap, setModalMap] = useState(false);
  const [userLocation, setUserLocation] = useState(JSON.parse(localStorage.getItem('geolocation')));
  const [isLocation, setIsLocation] = useState(false);

  return (
    <GeolocationContext.Provider value={{ 
      modalMap, 
      setModalMap, 
      userLocation, 
      setUserLocation,
      isLocation,
      setIsLocation
    }}>
      {children}
    </GeolocationContext.Provider>
  )
}