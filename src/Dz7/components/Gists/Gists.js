import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Gist from './Gist/Gist';
import Spinner from '../common/Spinner/Spinner';
import './Gists.css';
import { fetchGists } from '../../redux/actions/gists';
import { List } from '@material-ui/core';
import FileContent from './FileContent/FileContent';

export default function Gists() {
  const gists = useSelector(state => state.gists);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchGists());
  }, []);

  return (
    <div className="animated-wrapper">
      <div className="title">Gists</div>
      <Spinner isActive={gists.loading}/>
      <div className="container">
        <List dense className="gists-list">
          {gists.data.map(x => <Gist gist={x} key={x.id} />)}
        </List>
        <FileContent />
      </div>
    </div>
  )
}
