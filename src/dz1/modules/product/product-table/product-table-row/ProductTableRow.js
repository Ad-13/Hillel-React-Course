import React, { Component } from 'react'
import './ProductTableRow.css';
import IconButton from '@material-ui/core/IconButton';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import ProductEditRow from '../../product-edit-form/ProductEditRow';

export default class ProductTableRow extends Component {
  state = {
    editMode: false
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

  save = product => {
    this.props.onUpdate(product);
    this.cancelEditMode();
  }

  render() {
    const { product, onRemove } = this.props;
    const { editMode } = this.state;

    if (editMode) return <ProductEditRow
                            product={product}
                            cancelEditMode={this.cancelEditMode}
                            save={this.save}
                          />

    return (
      <TableRow className="table-row">
        <TableCell className="table-cell" component="th" scope="row">{product.title}</TableCell>
        <TableCell className="table-cell" align="right">{product.type}</TableCell>
        <TableCell className="table-cell" align="right">{product.price}</TableCell>
        <TableCell className="table-cell" align="right">{product.quantity}</TableCell>
        <TableCell className="table-cell cell-actions" align="right">
          <IconButton className="action"
            aria-label="edit"
            color="primary"
            onClick={this.setEditMode}
          >
            <EditIcon />
          </IconButton>
          <IconButton className="action"
            aria-label="delete"
            color="secondary"
            onClick={() => onRemove(product.id)}
          >
            <DeleteIcon />
          </IconButton>
        </TableCell>
      </TableRow>
    )
  }
}
