import React from 'react';
import { List, ListItem, Divider, ListItemAvatar, ListItemText, Avatar } from '@material-ui/core';
import './Gist.css';

export default function Gist({ gist }) {
  const files = Object.keys(gist.files);
  console.log(files);

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
        {files.map(x => <ListItem className="file" button><ListItemText secondary={x} /></ListItem>)}
      </List>
      <Divider variant="inset" component="li" />
    </>
  )
}
