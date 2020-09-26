import React from 'react';
import { useAlbum } from '../../shared/hooks/useAlbum';
import { Card, Dimmer, Loader, Segment, List } from 'semantic-ui-react';
import './AlbumList.css';

export default function AlbumList({ authorId }) {
  const [albums, isFetching] = useAlbum(authorId);
 
  if (isFetching) {
    return (
      <Card className="ui card albums">
        <Segment>
          <Dimmer active={isFetching}>
            <Loader />
          </Dimmer>
        </Segment>
      </Card>
    );
  }
 
  if (albums && albums.length) {
    return (
      <List className="albums">
        {albums.map(album => (
          <List.Item key={album.id}>
            <List.Icon name='picture'/>
            <List.Content>{album.title}</List.Content>
          </List.Item>
        ))}
      </List>
    );
  }

  return '';
}
