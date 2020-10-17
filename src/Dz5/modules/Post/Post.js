import React from 'react';
import { NavLink } from 'react-router-dom';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import Button from '@material-ui/core/Button';
import './Post.css';

export default function Post({ post }) {

  return (
    <div className="animated-wrapper">
      <ListItem>
        <ListItemText primary={post.title} secondary={post.body} />
        <NavLink className='link' activeClassName='active' to={`/users/${post.userId}`}>
          <Button className="btn" variant="contained">Go to User</Button>
        </NavLink>
      </ListItem>
      <Divider component="li" />
    </div>
  )
}
