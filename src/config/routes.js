import React from 'react';
import { Route, IndexRoute } from 'react-router';
import { Home } from 'containers/Home';
import Login from 'containers/Login';
import Admin from 'containers/Admin';
import { requireAuthentication } from '../components/Authenticated/Authenticated';

// each user can see certain routes
const rulesMatrix = {
  rule1: ['user'],
  rule2: ['admin', 'user']
};

const rootView = (
  <Route path="/" component={Home}>
    { /** ErrorPage */ }
    <IndexRoute component={Login} />
    <Route path="/admin" component={ requireAuthentication(Admin, rulesMatrix.rule2) } />
    <Route status={404} path="*" component={Home} />
  </Route>
);


export default rootView;
