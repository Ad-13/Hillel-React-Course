import { useState, useEffect } from 'react';

export function useOnlineStatus() {
  const [isOnline, setIsOnline] = useState(window.navigator.onLine);

  const updateOnlineStatus = () => {
    setIsOnline(window.navigator.onLine);
    console.log(window.navigator.onLine);
  };
  
  useEffect(() => {
    window.addEventListener("offline", updateOnlineStatus);
    window.addEventListener("online", updateOnlineStatus);

    return () => {
        window.removeEventListener("offline", updateOnlineStatus);
        window.removeEventListener("online", updateOnlineStatus);
    };
  });

  return isOnline;
}
