import { useState, useEffect } from 'react';

export function useAlbumsPhotos(id) {
  const [albumsPhotos, setAlbumsPhotos] = useState([]);
  const [isFetching, setIsFetching] = useState(false);

  useEffect(() => {
    setIsFetching(true);
    fetch(`https://jsonplaceholder.typicode.com/albums/${id}/photos`)
      .then(response => response.json())
      .then(response => {
        setAlbumsPhotos(response);
        setIsFetching(false);
      })
  }, [id]);

  return [albumsPhotos, isFetching];
}
