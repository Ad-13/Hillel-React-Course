import React, { useMemo } from 'react';
import { useSelector } from 'react-redux';
import './Cart.css';
import CartProduct from './CartProduct/CartProduct';
import { List, ListItemText, Divider } from '@material-ui/core';

export default function Cart() {
  const products = useSelector(state => state.products);
  const cartProducts = useSelector(state => state.cartProducts);

  const productsInCart = useMemo(() => {
    return cartProducts.map(({ id, basketCount }) => {
      const currentProduct = products.find(product => product.id === id);
      return {...currentProduct, basketCount: basketCount};
    });
  }, [products, cartProducts]);

  const totalCount = useMemo(() =>
    productsInCart.reduce((accumulator, product) => accumulator + product.basketCount * product.price, 0),
    [productsInCart]
  );

  return (
    <div className="animated-wrapper">
      <div className="title">
        Cart
      </div>
      <List className="cart-list" dense={true}>
        {productsInCart.map(x => <CartProduct product={x} key={x.id} />)}
      </List>
      {productsInCart?.length > 0 && 
        <>
          <Divider variant="inset" component="div" />
          <ListItemText primary={`Total price: ${totalCount}`} />
        </>
      }
      {!productsInCart?.length &&
        'No Product Found :('
      }
    </div>
  )
}
