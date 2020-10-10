import React from 'react';
import { useParams, Redirect } from 'react-router-dom';
import CircularProgress from '@material-ui/core/CircularProgress';
import { useUser } from '../../shared/hooks/useUser';
import './UserDetails.css';

export default function UserDetails() {
  const { userId } = useParams();
  const [user, isFetching] = useUser(userId);

  if (!userId) {
    return <Redirect to='/'/>
  }
 
  if (isFetching) {
    return (
      <div className="spinner-wrapper">
        <CircularProgress className="spinner" />
      </div>
    );
  }

  return (
    <>
      <div className="title">{user.name}</div>
      <div className="user-details">
        <div className="user-img">
          <img src="https://picsum.photos/id/1062/200/300" alt="" className="img"/>
        </div>
        <div className="user-info">
          <div className="user-txt">
            <div className="txt-title">User name:</div>
            <div className="txt">{user.username}</div>
          </div>
          <div className="user-txt">
            <div className="txt-title">Email:</div>
            <div className="txt">{user.email}</div>
          </div>
          <div className="user-txt">
            <div className="txt-title">Phone:</div>
            <div className="txt">{user.phone}</div>
          </div>
          <div className="user-txt">
            <div className="txt-title">Website:</div>
            <div className="txt">{user.website}</div>
          </div>
        </div>
      </div>
    </>
  )
}
