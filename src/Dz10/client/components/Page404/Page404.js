import React from 'react';
import { Button } from '@material-ui/core';
import { Link } from 'react-router-dom';

export default function Page404() {
  return (
    <div className="animated-wrapper">
      <img src="https://www.oddee.com/wp-content/uploads/_media/imgs/articles2/a96984_e4.jpg" alt=""/>
      <Button><Link to="/">Go Back</Link></Button>
    </div>
  )
}
