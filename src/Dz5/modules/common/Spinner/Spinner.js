import React from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';
import './Spinner.css';

export default function Spinner({ isActive }) {
  if (isActive) return (
    <div className="spinner-wrapper">
      <CircularProgress className="spinner" />
    </div>
  )

  return '';
}
