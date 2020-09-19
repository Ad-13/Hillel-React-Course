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
    editMode: false,
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

  update = product => {
    this.setState({
      products: this.state.products.map(x => x.id === product.id ? product : x)
    })
  }

  add = product => {
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

  remove = id => {
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
                  onAdd={this.add}
                  onRemove={this.remove}
                  onUpdate={this.update}
                />
              )
          }
        </div>
        <Footer />
      </div>
    )
  }
}
