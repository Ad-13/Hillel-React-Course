import { useState, useEffect } from 'react';

export function useUser(id) {
  const [user, setUser] = useState([]);
  const [isFetching, setIsFetching] = useState(false);

  useEffect(() => {
    setIsFetching(true);
    fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
      .then(response => response.json())
      .then(response => {
        setUser(response);
        setIsFetching(false);
      })
  }, [id]);

  return [user, isFetching];
}
