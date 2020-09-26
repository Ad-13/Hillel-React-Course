import React, { Component } from 'react'
import './ProductEditRow.css';
import AppInput from '../../../shared/inputs/app-input/AppInput';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import CancelIcon from '@material-ui/icons/Cancel';
import requiredValidator from '../../../shared/validators/Required.validator';

export default class ProductEditRow extends Component {

  constructor(props) {
    super(props);
    const { product } = props;
    this.state = {
      title: '',
      type: '',
      price: '',
      quantity: '',
      titleError: false,
      typeError: false,
      priceError: false,
      quantityError: false,
      ...product
    }
  }

  setErrors = (errors, name) => {
    this.setState({ [name + 'Error']: !!errors.length });
  }

  onChangeField = e => {
    const { name, value} = e.target;
    this.setState({ [name]: value });
  }

  saveProduct = () => {
    this.props.saveProduct(this.state);
    this.resetFields();
  }

  cancelEditMode = () => {
    this.resetFields();
    this.props.cancelEditMode();
  }

  resetFields = () => {
    this.setState({
      title: '',
      type: '',
      price: '',
      quantity: '',
    })
  }
  
  isDisabled() {
    return this.state.titleError
        || this.state.typeError
        || this.state.priceError
        || this.state.quantityError;
  }

  render() {
    const { title, type, price, quantity } = this.state;

    return (
      <TableRow className="table-row edit-row">
        <TableCell component="th" scope="row">
          <AppInput className="table-input"
            label="Title"
            name="title"
            onChange={this.onChangeField}
            onValidation={this.setErrors}
            variant="outlined"
            value={title}
            validators={[requiredValidator]}
          />
        </TableCell>
        <TableCell className="table-cell" align="right">
          <AppInput className="table-input"
            label="Type"
            name="type"
            onChange={this.onChangeField}
            onValidation={this.setErrors}
            variant="outlined"
            value={type}
            validators={[requiredValidator]}
          />
        </TableCell>
        <TableCell className="table-cell" align="right">
          <AppInput className="table-input"
            label="Price"
            name="price"
            onChange={this.onChangeField}
            onValidation={this.setErrors}
            variant="outlined"
            value={price}
            validators={[requiredValidator]}
          />
        </TableCell>
        <TableCell className="table-cell" align="right">
          <AppInput className="table-input"
            label="Quantity"
            name="quantity"
            onChange={this.onChangeField}
            onValidation={this.setErrors}
            variant="outlined"
            value={quantity}
            validators={[requiredValidator]}
          />
        </TableCell>
        <TableCell className="table-cell cell-actions" align="right">
          <Button disabled={this.isDisabled()} variant="contained" color="primary" onClick={this.saveProduct}>
            Save
          </Button>
          <IconButton className="action" aria-label="cancel" onClick={this.cancelEditMode}>
            <CancelIcon />
          </IconButton>
        </TableCell>
      </TableRow>
    )
  }
}
