import React from 'react';
import Post from '../Post/Post';
import { usePosts } from '../../shared/hooks/usePosts';
import List from '@material-ui/core/List';
import './Posts.css';
import Spinner from '../common/Spinner/Spinner';

export default function Posts() {
  const [posts, isFetching] = usePosts();

  return (
    <div className="animated-wrapper">
      <div className="title">Posts</div>
      <Spinner isActive={isFetching} />
      <List className="posts">{ posts.map(x => <Post post={x} key={x.id} />) }</List>
    </div>
  )
}
