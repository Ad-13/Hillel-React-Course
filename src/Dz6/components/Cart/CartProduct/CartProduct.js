import React from 'react';
import { useDispatch } from 'react-redux';
import { ListItem, ListItemText, ListItemSecondaryAction, IconButton, Divider } from '@material-ui/core';
import ExposureNeg1Icon from '@material-ui/icons/ExposureNeg1';
import PlusOneIcon from '@material-ui/icons/PlusOne';
import './CartProduct.css';
import { addToCart, removeFormCart } from '../../../redux/actions/cart';

export default function CartProduct({ product }) {
  const dispatch = useDispatch();

  return (
    <>
      <ListItem className="cart-item">
        <img className="img" src={product.img} alt=""/>
        <ListItemText
          primary={product.title}
          secondary={`Price: ${product.price}`}
        />
        <ListItemText
          secondary={`Amount: ${product.basketCount}`}
        />
        <ListItemSecondaryAction>
          <IconButton className="action-btn" edge="end" aria-label="delete" onClick={() => dispatch(addToCart(product.id))}>
            <PlusOneIcon />
          </IconButton>
          <IconButton className="action-btn" edge="end" aria-label="delete" onClick={() => dispatch(removeFormCart(product.id))}>
            <ExposureNeg1Icon />
          </IconButton>
        </ListItemSecondaryAction>
      </ListItem>
      <Divider variant="inset" component="div" />
      <ListItemText
        secondary={`Total product price: ${product.basketCount * product.price}`}
      />
    </>
  )
}
