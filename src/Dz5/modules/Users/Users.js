import React from 'react';
import List from '@material-ui/core/List';
import { useUsers } from '../../shared/hooks/useUsers';
import UsersListItem from '../UsersListItem/UsersListItem';
import './Users.css';
import UserDetails from '../UserDetails/UserDetails';
import Spinner from '../common/Spinner/Spinner';
import { useParams } from 'react-router-dom';

export default function Users() {
  const [users, isFetching] = useUsers();
  const { userId } = useParams();

  return (
    <div className="animated-wrapper">
      <div className="title">Users</div>

      <Spinner isActive={isFetching} />
 
      {!isFetching && users.length &&
        <div className="parts">
          <div className="part">
            <List className="users">{ users.map(x => <UsersListItem user={x} key={x.id} />) }</List>
          </div>
          <div className="part">
            {userId && <UserDetails userId={userId}/>}
          </div>
        </div>
      }
      
    </div>
  );
}
