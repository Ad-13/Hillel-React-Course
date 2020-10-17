import { useState, useEffect } from 'react';

export function useUsers() {
  const [users, setUsers] = useState([]);
  const [notFound, setNotFound] = useState(false);
  const [isFetching, setIsFetching] = useState(false);

  useEffect(() => {
    let unmounted = false;

    setIsFetching(true);
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(res => res.ok ? res : Promise.reject(res))
      .then(response => response.json())
      .then(response => {
        if(!unmounted) setUsers(response);
        if(!unmounted) setIsFetching(false);
      })
      .catch(err => {
        setIsFetching(false);
        if (err.status === 404) setNotFound(true);
      });

    return () => unmounted = true;
  
  }, []);

  return [users, isFetching, notFound];
}
