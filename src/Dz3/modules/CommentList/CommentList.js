import React from 'react';
import { Feed, Loader, Dimmer,Segment } from 'semantic-ui-react';
import './CommentList.css';
import { useComments } from '../../shared/hooks/useComments';

export default function CommentList({ selectedPostId }) {
  const [comments, isFetching] = useComments(selectedPostId);
 
  if (isFetching) {
    return (
      <Segment>
        <Dimmer active={isFetching}>
          <Loader />
        </Dimmer>
      </Segment>
    );
  }

  if (comments && comments.length) {
    return (
      <Segment>
        <Feed>
          {comments.map(comment => (
            <Feed.Event
              key={comment.id}
              image='https://react.semantic-ui.com/images/avatar/small/helen.jpg'
              date='3 days ago'
              summary={comment.name}
              extraText={comment.body}
            />
          ))}
        </Feed>
      </Segment>
    )
  }

  return '';
}
