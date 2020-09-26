import { useState, useEffect } from 'react';

export function useUserData(authorId) {
  const [userData, setUserData] = useState(null);
  const [isFetching, setIsFetching] = useState(false);


  useEffect(() => {
    if (!authorId ) return ;

    setIsFetching(true);

    fetch(`https://jsonplaceholder.typicode.com/users/${authorId}`)
      .then(response => response.json())
      .then(response => {
        setUserData(response);
        setIsFetching(false);
      })
  }, [authorId]);

  return [userData, isFetching];
}
