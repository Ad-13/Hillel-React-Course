import React, { Component } from 'react';
import './Dz1.css';
import Header from './modules/common/header/Header';
import Footer from './modules/common/footer/Footer';
import ProductTable from './modules/product/product-table/ProductTable';
import CircularProgress from '@material-ui/core/CircularProgress';
import productsApi from './dummy-product-api';

export default class Dz1 extends Component {
  state = {
    products: [],
    loading: false
  }

  componentDidMount() {
    this.setState({ loading: true });

    productsApi
      .fetchProducts()
      .then(products => {
        this.setState({ products, loading: false })
      })
  }

  updateProduct = product => {
    this.setState({
      products: this.state.products.map(x => x.id === product.id ? product : x)
    })
  }

  addProduct = product => {
    this.setState({
      products: [
        ...this.state.products,
        {
            id: Math.floor(Math.random() *100),
            ...product
        }
      ]
    })
  }

  removeProduct = id => {
    this.setState({
      products: this.state.products.filter(x => x.id !== id)
    })
  }

  render() {
    return (
      <div className="app">
        <Header />
        <div className="app-content">
          {
            this.state.loading
              ? (
                <div className="spinner-wrapper">
                  <CircularProgress className="spinner" />
                </div>
              )
              : (
                <ProductTable
                  products={this.state.products}
                  onAddProduct={this.addProduct}
                  onRemoveProduct={this.removeProduct}
                  onUpdateProduct={this.updateProduct}
                />
              )
          }
        </div>
        <Footer />
      </div>
    )
  }
}
