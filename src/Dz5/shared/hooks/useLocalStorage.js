import { useState } from 'react';

export function useLocalStorage(key, initialValue) {
  const [storedValue, setStoredValue] = useState(() => {
    const item = window.localStorage.getItem(key);
      if (item) {
        return JSON.parse(item);
      } else if (initialValue) {
        window.localStorage.setItem(key, JSON.stringify(initialValue));
        return initialValue;
      } else {
        return null;
      }
  });

  const setValue = (value) => {
    window.localStorage.setItem(key, JSON.stringify(value));
    setStoredValue(value);
  }

  return [storedValue, setValue];
}
