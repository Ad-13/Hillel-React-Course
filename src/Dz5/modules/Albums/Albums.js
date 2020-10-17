import React from 'react';
import AlbumsListItem from '../AlbumsListItem/AlbumsListItem';
import { useAlbums } from '../../shared/hooks/useAlbums';
import List from '@material-ui/core/List';
import './Albums.css';
import { Redirect, useParams, withRouter } from 'react-router-dom';
import Spinner from '../common/Spinner/Spinner';

function Albums(props) {
  const { userId } = useParams();
  const [albums, isFetching, notFound] = useAlbums(userId);
  const title = props.location.userName ? 'User Albums' : 'Albums';

  if (userId && notFound) {
    return <Redirect to={`/users/${userId}`}/>
  }

  return (
    <div className="animated-wrapper">
      <div className="title">{title}</div>
      <Spinner isActive={isFetching} />
      <List className="albums">{ albums.map(x => <AlbumsListItem album={x} key={x.id} />) }</List>
    </div>
  )
}

export default withRouter(Albums);
