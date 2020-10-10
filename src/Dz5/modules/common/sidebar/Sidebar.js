import React from 'react';
import { NavLink } from 'react-router-dom';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import GroupIcon from '@material-ui/icons/Group';
import PostAddTwoToneIcon from '@material-ui/icons/PostAddTwoTone';
import PhotoAlbumTwoToneIcon from '@material-ui/icons/PhotoAlbumTwoTone';
import './Sidebar.css';

function Sidebar() {
  return (
    <Drawer className='sidebar'
      variant='permanent'>
      <List>
        <NavLink className='sidebar-link' exact activeClassName='active'  to='/'>
          <ListItem button key={'Home'}>
            <ListItemIcon><InboxIcon /></ListItemIcon>
            <ListItemText>Home</ListItemText>
          </ListItem>
        </NavLink>
        <NavLink className='sidebar-link' exact activeClassName='active'  to='/about'>
          <ListItem button key={'About'}>
            <ListItemIcon><MailIcon /></ListItemIcon>
            <ListItemText>About</ListItemText>
          </ListItem>
        </NavLink>
        <NavLink className='sidebar-link' activeClassName='active'  to='/users'>
          <ListItem button key={'Users'}>
            <ListItemIcon><GroupIcon /></ListItemIcon>
            <ListItemText>Users</ListItemText>
          </ListItem>
        </NavLink>
        <NavLink className='sidebar-link' exact activeClassName='active'  to='/posts'>
          <ListItem button key={'Posts'}>
            <ListItemIcon><PostAddTwoToneIcon /></ListItemIcon>
            <ListItemText>Posts</ListItemText>
          </ListItem>
        </NavLink>
        <NavLink className='sidebar-link' exact activeClassName='active'  to='/albums'>
          <ListItem button key={'Albums'}>
            <ListItemIcon><PhotoAlbumTwoToneIcon /></ListItemIcon>
            <ListItemText>Albums</ListItemText>
          </ListItem>
        </NavLink>
      </List>
    </Drawer>
  );
}

export default Sidebar;
