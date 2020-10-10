import React from 'react';
import { NavLink } from 'react-router-dom';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import Button from '@material-ui/core/Button';
import './AlbumsListItem.css';

export default function AlbumsListItem({ album }) {

  return (
    <>
      <ListItem>
        <ListItemText primary={album.title} />
        <NavLink className='link' activeClassName='active' to={`/users/${album.userId}`}>
          <Button className="btn btn-user" variant="contained">Go to User</Button>
        </NavLink>
        <NavLink className='link' activeClassName='active' to={`/albums/${album.id}/photos`}>
          <Button className="btn" variant="contained">Album Photos</Button>
        </NavLink>
      </ListItem>
      <Divider component="li" />
    </>
  )
}
