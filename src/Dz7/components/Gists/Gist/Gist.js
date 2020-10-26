import React from 'react';
import { useDispatch } from 'react-redux';
import { getFileContent } from '../../../redux/actions/files';
import { List, ListItem, Divider, ListItemAvatar, ListItemText, Avatar } from '@material-ui/core';
import './Gist.css';

export default function Gist({ gist }) {
  const dispatch = useDispatch();
  const gistFiles = Object.keys(gist.files);

  function onFileClick(file) {
    window.scrollTo({top: 0, behavior: 'smooth'});

    dispatch(getFileContent({
      gistId: gist.id,
      fileName: gist.files[file].filename,
      fileLanguage: gist.files[file].language,
      fileUrl: gist.files[file].raw_url
    }));
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
      {
        gist.description && (
          <div className="detail-block description-block">
            <div className="detail-ttl">Description:</div>
            <div className="details">{gist.description}</div>
          </div>
        )
      }
      
      <div className="detail-block">
        <div className="detail-ttl">Files:</div>
        <List className="details">
          {gistFiles.map(file =>
            <ListItem className="file" key={file} button onClick={() => onFileClick(file)}>
              <ListItemText secondary={file} />
            </ListItem>
          )}
        </List>
      </div>

      <Divider variant="inset" component="li" />
    </>
  )
}
