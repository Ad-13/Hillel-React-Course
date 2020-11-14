import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Gist from './Gist/Gist';
import Spinner from '../common/Spinner/Spinner';
import './Gists.css';
import { fetchGists } from '../../redux/actions/gists';
import { List } from '@material-ui/core';
import FileContent from './FileContent/FileContent';
import { getGistLoading, getGists } from '../../redux/selectors/gists';

export default function Gists() {
  const gists = useSelector(getGists);
  const gistsLoading = useSelector(getGistLoading);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchGists());
  }, [dispatch]);

  return (
    <div className="animated-wrapper">
      <div className="title">Gists</div>
      {
        gistsLoading ? (
          <Spinner isActive={true}/>
        ) : (
          <div className="container">
            <List dense className="gists-list">
              {gists.map(x => <Gist gist={x} key={x.id} />)}
            </List>
            <FileContent />
          </div>
        )
      }
    </div>
  )
}
