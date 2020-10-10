import React from 'react';
import Post from '../Post/Post';
import { usePosts } from '../../shared/hooks/usePosts';
import List from '@material-ui/core/List';
import CircularProgress from '@material-ui/core/CircularProgress';
import './Posts.css';

export default function Posts() {
  const [posts, isFetching] = usePosts();
 
  if (isFetching) {
    return (
      <div className="spinner-wrapper">
        <CircularProgress className="spinner" />
      </div>
    );
  }

  return (
    <>
      <div className="title">Posts</div>
      <List className="posts">{ posts.map(x => <Post post={x} key={x.id} />) }</List>
    </>
  )
}
