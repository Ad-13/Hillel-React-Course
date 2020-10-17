import { useState, useEffect } from 'react';

export function useUser(id) {
  const [user, setUser] = useState([]);
  const [notFound, setNotFound] = useState(false);
  const [isFetching, setIsFetching] = useState(false);

  useEffect(() => {
    let unmounted = false;

    setIsFetching(true);
    fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
      .then(res => res.ok ? res : Promise.reject(res))
      .then(response => response.json())
      .then(response => {
        if(!unmounted) setUser(response);
        if(!unmounted) setIsFetching(false);
      })
      .catch(err => {
        setIsFetching(false);
        if (err.status === 404) setNotFound(true);
      });

    return () => unmounted = true;

  }, [id]);

  return [user, isFetching, notFound];
}
