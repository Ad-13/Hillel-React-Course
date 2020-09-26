import { useState, useEffect } from 'react';

export function useAlbum(selectedUserId) {
  const [albums, setAlbums] = useState([]);
  const [isFetching, setIsFetching] = useState(false);

  useEffect(() => {
    if (!selectedUserId ) return ;

    setIsFetching(true);

    fetch(`https://jsonplaceholder.typicode.com/users/${selectedUserId}/albums`)
      .then(response => response.json())
      .then(response => {
        setAlbums(response);
        setIsFetching(false);
      })
  }, [selectedUserId]);

  return [albums, isFetching];
}
