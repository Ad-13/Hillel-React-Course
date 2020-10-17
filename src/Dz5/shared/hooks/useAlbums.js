import { useState, useEffect } from 'react';

export function useAlbums(userId) {
  const [albums, setAlbums] = useState([]);
  const [notFound, setNotFound] = useState(false);
  const [isFetching, setIsFetching] = useState(false);
  const request = userId ? `https://jsonplaceholder.typicode.com/users/${userId}/albums` : 'https://jsonplaceholder.typicode.com/albums';

  useEffect(() => {
    let unmounted = false;

    setIsFetching(true);
    fetch(request)
      .then(res => res.ok ? res : Promise.reject(res))
      .then(response => response.json())
      .then(response => {
        if(!unmounted) setAlbums(response);
        if(!unmounted) setIsFetching(false);
      })
      .catch(err => {
        setIsFetching(false);
        if (err.status === 404) setNotFound(true);
      });

    return () => unmounted = true;

  }, [userId]);

  return [albums, isFetching, notFound];
}
