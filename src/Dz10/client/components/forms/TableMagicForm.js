import React from 'react';
import { TableRow, TableCell, IconButton, Button } from '@material-ui/core';
import CancelIcon from '@material-ui/icons/Cancel';
import CustomTextField from './CustomTextField';
import { Field, reduxForm } from 'redux-form';
import { required, number, maxDamage, maxMana } from '../../utils/validators';

function TableMagicForm(props) {
  const { handleSubmit, pristine, submitting, onCancel, valid } = props

  return (
    <TableRow component="form" className="table-row edit-row" onSubmit={handleSubmit}>
      <TableCell component="div" scope="row">
        <Field className="table-input"
          name="name"
          component={CustomTextField}
          label="Name"
          validate={[required]}
        />
      </TableCell>
      <TableCell component="div" className="table-cell">
        <Field className="table-input"
          name="damage"
          component={CustomTextField}
          label="Damage"
          validate={[required, number, maxDamage]}
        />
      </TableCell>
      <TableCell component="div" className="table-cell">
        <Field className="table-input"
          name="requiredMana"
          component={CustomTextField}
          label="Mana"
          validate={[required, number, maxMana]}
        />
      </TableCell>
      <TableCell component="div" className="table-cell">
        <Field className="table-input"
          name="description"
          component={CustomTextField}
          label="Description"
          multiline
        />
      </TableCell>
      <TableCell component="div" className="table-cell cell-actions">
        <Button type="submit" variant="contained" color="primary" disabled={pristine || submitting || !valid}>
          Save
        </Button>
        <IconButton className="action" aria-label="cancel" onClick={onCancel}>
          <CancelIcon />
        </IconButton>
      </TableCell>
    </TableRow>
  )
}

export default reduxForm({
  form: 'TableMagicForm'
})(TableMagicForm);
