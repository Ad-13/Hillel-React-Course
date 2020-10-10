import { useState, useEffect } from 'react';

export function usePosts() {
  const [posts, setPosts] = useState([]);
  const [isFetching, setIsFetching] = useState(false);

  useEffect(() => {
    setIsFetching(true);
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => response.json())
      .then(response => {
        setPosts(response);
        setIsFetching(false);
      })
  }, []);

  return [posts, isFetching];
}
