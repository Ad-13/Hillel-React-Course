import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './MagicTableRow.css';
import { IconButton, LinearProgress, TableCell, TableRow } from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import TableMagicForm from '../../forms/TableMagicForm';
import { deleteMagics, updateMagics } from '../../../redux/actions/magics';
import { getMagicInnerLoading } from '../../../redux/selectors/magics';

export default function MagicTableRow({ magic }) {
  const [editMode, setEditMode] = useState(false);
  const [innerLoading, setInnerLoading] = useState(false);
  const loading = useSelector(getMagicInnerLoading);
  const dispatch = useDispatch();
  
  if (editMode) return <TableMagicForm
    initialValues={magic}
    onCancel={() => setEditMode(false)}
    onSubmit={model => {
      dispatch(updateMagics(model));
      setInnerLoading(true);
      setEditMode(false);
    }}
  />

  if (loading && innerLoading) return (
    <TableRow component="div" className="table-row">
      <TableCell component="div" className="table-cell"><LinearProgress className="linear-spinner" /></TableCell>
      <TableCell component="div" className="table-cell"></TableCell>
      <TableCell component="div" className="table-cell"></TableCell>
      <TableCell component="div" className="table-cell"></TableCell>
      <TableCell component="div" className="table-cell"></TableCell>
    </TableRow>
  )

  return (
    <TableRow component="div" className="table-row">
      <TableCell component="div" className="table-cell" scope="row">{magic.name}</TableCell>
      <TableCell component="div" className="table-cell">{magic.damage}</TableCell>
      <TableCell component="div" className="table-cell">{magic.requiredMana}</TableCell>
      <TableCell component="div" className="table-cell">{magic.description}</TableCell>
      <TableCell component="div" className="table-cell cell-actions">
        <IconButton className="action"
          aria-label="edit"
          color="primary"
          onClick={() => {
            setInnerLoading(false);
            setEditMode(true);
          }}
        >
          <EditIcon />
        </IconButton>
        <IconButton className="action"
          aria-label="delete"
          color="secondary"
          onClick={() => {
            setInnerLoading(true);
            dispatch(deleteMagics(magic._id));
          }}
        >
          <DeleteIcon />
        </IconButton>
      </TableCell>
    </TableRow>
  )
}
