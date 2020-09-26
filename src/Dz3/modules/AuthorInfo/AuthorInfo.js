import React from 'react';
import { useUserData } from '../../shared/hooks/useUserData';
import { Card, Dimmer, Loader, Segment } from 'semantic-ui-react';
import './AuthorInfo.css';
import AlbumList from '../AlbumList/AlbumList';

export default function AuthorInfo({ authorId }) {
  const [userData, isFetching] = useUserData(authorId);
 
  if (isFetching) {
    return (
      <Card className="ui card author-info">
        <Segment>
          <Dimmer active={isFetching}>
            <Loader />
          </Dimmer>
        </Segment>
      </Card>
    );
  }

  if (userData) {
    return (
      <Card className="ui card author-info">
        <Card.Content>
          <Card.Header>{userData.name}</Card.Header>
          <Card.Meta><span className='date'>Email: {userData.email}</span></Card.Meta>
          <Card.Description>{userData.phone}</Card.Description>
          <AlbumList authorId={authorId} />
        </Card.Content>
      </Card>
    );
  }

  return '';
}
