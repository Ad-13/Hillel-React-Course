import React from 'react';
import { useDispatch } from 'react-redux';
import { getFileContent } from '../../../redux/actions/files';
import { List, ListItem, Divider, ListItemAvatar, ListItemText, Avatar } from '@material-ui/core';
import './Gist.css';

export default function Gist({ gist }) {
  const dispatch = useDispatch();
  const gistFiles = Object.keys(gist.files);

  function onFileClick(file) {
    dispatch(getFileContent({
      gistId: gist.id,
      fileLanguage: gist.files[file].language,
      fileUrl: gist.files[file].raw_url
    }))
  }

  return (
    <>
      <ListItem className="user">
        <ListItemAvatar>
          <Avatar
            alt=""
            src={gist.owner.avatar_url}
          />
        </ListItemAvatar>
        <ListItemText primary={gist.owner.login} />
      </ListItem>
      <div className="files-ttl">Files:</div>
      <List className="files-list">
        {gistFiles.map(file =>
          <ListItem className="file" key={file} button onClick={() => onFileClick(file)}>
            <ListItemText secondary={file} />
          </ListItem>
        )}
      </List>
      <Divider variant="inset" component="li" />
    </>
  )
}
