import { useState, useEffect } from 'react';

export function useUsers() {
  const [users, setUsers] = useState([]);
  const [isFetching, setIsFetching] = useState(false);

  useEffect(() => {
    setIsFetching(true);
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(response => {
        setUsers(response);
        setIsFetching(false);
      })
  }, []);

  return [users, isFetching];
}
