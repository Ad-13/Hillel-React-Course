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
        <NavLink className='sidebar-link' exact activeClassName='active'  to='/cart'>
          <ListItem button key={'Cart'}>
            <ListItemIcon><MailIcon /></ListItemIcon>
            <ListItemText>Cart</ListItemText>
          </ListItem>
        </NavLink>
        <NavLink className='sidebar-link' activeClassName='active'  to='/products'>
          <ListItem button key={'Products'}>
            <ListItemIcon><GroupIcon /></ListItemIcon>
            <ListItemText>Products</ListItemText>
          </ListItem>
        </NavLink>
      </List>
    </Drawer>
  );
}

export default Sidebar;
