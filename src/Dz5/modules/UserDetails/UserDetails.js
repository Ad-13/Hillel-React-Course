import React from 'react';
import { Redirect, NavLink } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import { useUser } from '../../shared/hooks/useUser';
import './UserDetails.css';
import Spinner from '../common/Spinner/Spinner';

export default function UserDetails({ userId } ) {
  const [user, isFetching, notFound] = useUser(userId);

  if (!userId) {
    return <Redirect to='/'/>
  }

  if (userId && notFound) {
    return <Redirect to='/users'/>
  }

  return (
    <div className="animated-wrapper">
      <Spinner isActive={isFetching} />
      {!isFetching &&
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
              <NavLink className='link'
                to={{
                  pathname: `/users/${user.id}/albums`,
                  userName: user.username
                }}>
                <Button className="btn" variant="contained">User Albums</Button>
              </NavLink>
            </div>
          </div>
        </>
      }
    </div>
  )
}
