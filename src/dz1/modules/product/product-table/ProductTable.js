import React, { Component } from 'react'
import './ProductTable.css';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import ProductTableRow from './product-table-row/ProductTableRow';
import ProductEditRow from '../product-edit-form/ProductEditRow';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import Zoom from '@material-ui/core/Zoom';

export default class ProductTable extends Component {
  state = {
    editMode: false
  }

  onAddProduct = product => {
    this.cancelEditMode();
    this.props.onAddProduct(product);
  }

  setEditMode = () => {
    this.setState({
      editMode: true
    });
  }

  cancelEditMode = () => {
    this.setState({
      editMode: false
    });
  }

  render() {
    const { editMode } = this.state;
    const { products, onUpdateProduct, onRemoveProduct } = this.props;

    return (
      <>
        <div className="container">
          <TableContainer component={Paper}>
            <Table className="table" size="small" aria-label="a dense table">
              <TableHead>
                <TableRow>
                  <TableCell className="table-cell">Title</TableCell>
                  <TableCell className="table-cell" align="right">Type</TableCell>
                  <TableCell className="table-cell" align="right">Price</TableCell>
                  <TableCell className="table-cell" align="right">Quantity</TableCell>
                  <TableCell className="table-cell cell-actions" align="right">Actions</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {products.map(x =>
                  <ProductTableRow
                    key={x.id}
                    product={x}
                    onUpdateProduct={onUpdateProduct}
                    onRemoveProduct={onRemoveProduct}
                  />
                )}
              </TableBody>
            </Table>
          </TableContainer>
        </div>

        <div className="container add-new">
          <Zoom in={!editMode} disableStrictModeCompat={true}>
            <Fab className="add-btn" color="primary" aria-label="add" onClick={this.setEditMode}>
              <AddIcon />
            </Fab>
          </Zoom>
          <Zoom in={editMode} disableStrictModeCompat={true}>
            <TableContainer component={Paper}>
              <Table className="table" size="small" aria-label="a dense table">
                <TableBody>
                  {
                    editMode &&
                    <ProductEditRow
                      cancelEditMode={this.cancelEditMode}
                      saveProduct={this.onAddProduct}
                    />
                  }
                </TableBody>
              </Table>
            </TableContainer>
          </Zoom>
        </div>
      </>
    )
  }
}
