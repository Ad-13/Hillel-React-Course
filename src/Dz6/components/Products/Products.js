import React from 'react';
import { useSelector } from 'react-redux';
import Product from './Product/Product';
import './Products.css';

export default function Products() {
  const products = useSelector(state => state.products);

  return (
    <div className="animated-wrapper">
      <div className="title">
        Products
      </div>
      <div className="product-list">
        {products.map(x => <Product product={x} key={x.id} />)}
      </div>
    </div>
  )
}
