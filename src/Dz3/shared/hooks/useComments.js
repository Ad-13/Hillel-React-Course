import { useState, useEffect } from 'react';

export function useComments(selectedPostId) {
  const [comments, setComments] = useState([]);
  const [isFetching, setIsFetching] = useState(false);

  useEffect(() => {
    if (!selectedPostId ) return ;

    setIsFetching(true);

    fetch(`https://jsonplaceholder.typicode.com/posts/${selectedPostId}/comments`)
      .then(response => response.json())
      .then(response => {
        setComments(response);
        setIsFetching(false);
      })
  }, [selectedPostId]);

  return [comments, isFetching];
}
