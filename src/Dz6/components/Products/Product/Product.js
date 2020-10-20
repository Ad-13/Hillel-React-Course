import React from 'react';
import { useDispatch } from 'react-redux';
import { addToCart } from '../../../redux/actions/cart';
import { Card, CardMedia, CardContent, Typography, CardActions, Button } from '@material-ui/core';
import './Product.css';

export default function Product({ product }) {
  const dispatch = useDispatch();

  return (
    <Card className="product">
      <CardMedia
        image={product.img}
        title={product.title}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="h2">
          {product.title}
        </Typography>
        <Typography variant="body2" color="textSecondary" component="p">
          Price: {product.price}
        </Typography>
      </CardContent>
      <CardActions>
        <Button className="buy-btn" size="small" onClick={() => dispatch(addToCart(product.id))}>
          Add To Caaaart!
        </Button>
      </CardActions>
    </Card>
  )
}
