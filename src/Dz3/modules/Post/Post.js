import React, { useRef } from 'react';
import { Feed } from 'semantic-ui-react';
import CommentList from '../CommentList/CommentList';

export default function Post({ post, selectedPostId, onPostSelect }) {
  const myRef = useRef(null);

  return (
    <Feed.Event>
      <Feed.Label image='https://react.semantic-ui.com/images/avatar/small/elliot.jpg' />
      <Feed.Content>
        <Feed.Summary>
          <span className="post-title" ref={myRef} onClick={() => onPostSelect(post, myRef)}>{post.title}</span>
        </Feed.Summary>
        {
          post.id === selectedPostId &&
          <>
            <Feed.Extra text>
              {post.body}
            </Feed.Extra>
            <CommentList selectedPostId={selectedPostId} />
          </>
        }
      </Feed.Content>
    </Feed.Event>
  )
}
