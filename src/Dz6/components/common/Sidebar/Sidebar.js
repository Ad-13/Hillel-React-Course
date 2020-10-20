import React, { useMemo } from 'react';
import { NavLink } from 'react-router-dom';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import GroupIcon from '@material-ui/icons/Group';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import './Sidebar.css';
import { useSelector } from 'react-redux';

function Sidebar() {
  const products = useSelector(state => state.cartProducts);

  const totalCount = useMemo(() =>
    products.reduce((accumulator, product) => accumulator + product.basketCount, 0),
    [products]
  );

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
            <ListItemIcon><ShoppingCartIcon /></ListItemIcon>
            <ListItemText>Cart</ListItemText>
            {totalCount > 0 &&
              <div className="total-count">{totalCount}</div>
            }
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
