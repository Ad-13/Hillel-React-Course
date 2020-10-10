import { useState, useEffect } from 'react';

export function useAlbums(userId) {
  const [albums, setAlbums] = useState([]);
  const [isFetching, setIsFetching] = useState(false);
  const request = userId ? `https://jsonplaceholder.typicode.com/users/${userId}/albums` : 'https://jsonplaceholder.typicode.com/albums';

  useEffect(() => {
    setIsFetching(true);
    fetch(request)
      .then(response => response.json())
      .then(response => {
        setAlbums(response);
        setIsFetching(false);
      })
  }, [userId]);

  return [albums, isFetching];
}
