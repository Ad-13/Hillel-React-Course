import React from 'react';
import { usePosts } from '../../shared/hooks/usePosts';
import { Feed, Loader, Segment, Dimmer } from 'semantic-ui-react';
import './PostList.css';
import Post from '../Post/Post';

export default function PostList({ onPostSelect, selectedPostId }) {
  const [posts, isFetching] = usePosts();
 
  if (isFetching) {
    return (
      <Segment>
        <Dimmer active={isFetching}>
          <Loader size='small' />
        </Dimmer>
      </Segment>
    );
  }

  if (posts && posts.length) {
    return (
      <Feed>
        {posts.map(post => (
          <Post key={post.id} post={post} selectedPostId={selectedPostId} onPostSelect={onPostSelect} />
        ))}
      </Feed>
    );
  }

  return '';

}
