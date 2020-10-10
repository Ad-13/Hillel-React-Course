import React from 'react';
import AlbumsListItem from '../AlbumsListItem/AlbumsListItem';
import { useAlbums } from '../../shared/hooks/useAlbums';
import List from '@material-ui/core/List';
import CircularProgress from '@material-ui/core/CircularProgress';
import './Albums.css';
import { withRouter } from 'react-router-dom';

function Albums(props) {
  const [albums, isFetching] = useAlbums(props.location.userId);
  const title = props.location.userName ? 'User Albums' : 'Albums';

  if (isFetching) {
    return (
      <div className="spinner-wrapper">
        <CircularProgress className="spinner" />
      </div>
    );
  }

  return (
    <>
      <div className="title">{title}</div>
      <List className="albums">{ albums.map(x => <AlbumsListItem album={x} key={x.id} />) }</List>
    </>
  )
}

export default withRouter(Albums);
