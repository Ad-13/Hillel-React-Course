import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './Magics.css';
import { addMagics, getMagics } from '../../redux/actions/magics';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Zoom, Fab, LinearProgress } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import Spinner from '../common/Spinner/Spinner';
import { getMagicLoading, getMagicsSelector, getMagicAddingLoading } from '../../redux/selectors/magics';
import MagicTableRow from './MagicTableRow/MagicTableRow';
import TableMagicForm from '../forms/TableMagicForm';

export default function Magics() {
  const [editMode, setEditMode] = useState(false);
  const magics = useSelector(getMagicsSelector);
  const loading = useSelector(getMagicLoading);
  const addingLoading = useSelector(getMagicAddingLoading);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getMagics());
  }, [dispatch]);

  if (loading) return <Spinner isActive={true}/>;

  return (
    <div className="animated-wrapper">
      <div className="title">~ Magics ~</div>

      <div className="container">
        <TableContainer component={Paper}>
          <Table component="div" className="table" size="small" aria-label="a dense table">
            <TableHead component="div">
              <TableRow component="div">
                <TableCell component="div" className="table-cell">Name</TableCell>
                <TableCell component="div" className="table-cell">Damage</TableCell>
                <TableCell component="div" className="table-cell">Mana</TableCell>
                <TableCell component="div" className="table-cell">Descr</TableCell>
                <TableCell component="div" className="table-cell cell-actions">Actions</TableCell>
              </TableRow>
            </TableHead>
            <TableBody component="div">
              {magics.map(x =>
                <MagicTableRow
                  component="div"
                  key={x._id}
                  magic={x}
                />
              )}
            </TableBody>
          </Table>
        </TableContainer>
      </div>


      <div className="container add-new">
        {addingLoading &&
          <Table component="div" className="table" size="small" aria-label="a dense table">
            <TableBody component="div">
              <TableRow component="div" className="table-row">
                <TableCell component="div" className="table-cell"><LinearProgress className="linear-spinner" /></TableCell>
                <TableCell component="div" className="table-cell"></TableCell>
                <TableCell component="div" className="table-cell"></TableCell>
                <TableCell component="div" className="table-cell"></TableCell>
                <TableCell component="div" className="table-cell"></TableCell>
              </TableRow>
            </TableBody>
          </Table>
        }
        <Zoom in={!editMode && !addingLoading} disableStrictModeCompat={true}>
          <Fab className="add-btn" color="primary" aria-label="add" onClick={() => setEditMode(true)}>
            <AddIcon />
          </Fab>
        </Zoom>
        <Zoom in={editMode} disableStrictModeCompat={true}>
          <TableContainer component={Paper}>
            <Table component="div" className="table" size="small" aria-label="a dense table">
              <TableBody component="div">
                { editMode && !addingLoading &&
                  <TableMagicForm
                    onCancel={() => setEditMode(false)}
                    onSubmit={model => {
                      dispatch(addMagics(model));
                      setEditMode(false);
                    }}
                  />
                }
              </TableBody>
            </Table>
          </TableContainer>
        </Zoom>
      </div>
    </div>
  )
}
