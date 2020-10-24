import React from 'react';
import { NavLink } from 'react-router-dom';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import GroupIcon from '@material-ui/icons/Group';
import './Sidebar.css';

export default function Sidebar() {
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
        <NavLink className='sidebar-link' activeClassName='active'  to='/gists'>
          <ListItem button key={'Gists'}>
            <ListItemIcon><GroupIcon /></ListItemIcon>
            <ListItemText>Gists</ListItemText>
          </ListItem>
        </NavLink>
      </List>
    </Drawer>
  );
}
