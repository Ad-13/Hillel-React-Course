import React from 'react';
import { Route, Switch, useRouteMatch } from 'react-router-dom';
import List from '@material-ui/core/List';
import CircularProgress from '@material-ui/core/CircularProgress';
import { useUsers } from '../../shared/hooks/useUsers';
import UsersListItem from '../UsersListItem/UsersListItem';
import './Users.css';
import UserDetails from '../UserDetails/UserDetails';

export default function Users() {
  const [users, isFetching] = useUsers();
  const { path } = useRouteMatch();
 
  if (isFetching) {
    return (
      <div className="spinner-wrapper">
        <CircularProgress className="spinner" />
      </div>
    );
  }

  return (
    <>
      <div className="title">Users</div>
      <div className="parts">
        <div className="part">
          <List className="users">{ users.map(x => <UsersListItem user={x} key={x.id} />) }</List>
        </div>
        <div className="part">
          <Switch>
            <Route path={`${path}/:userId`} exact>
              <UserDetails />
            </Route>
          </Switch>
        </div>
      </div>
    </>
  )
}
