import React from 'react';
import { Route, Switch, BrowserRouter } from 'react-router-dom';

import Dashboard from 'pages/Dashboard';
import Sales from 'pages/Sales';
import Login from 'pages/Login';
import Register from 'pages/Register';
import PrivateRoute from './PrivateRoute';

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/" exact component={Login} />
      <Route path="/register" component={Register} />
      <PrivateRoute path="/dashboard" component={Dashboard} />
      <PrivateRoute path="/sales" component={Sales} />
      <Route path="*" component={() => <h1>Esta página não existe!</h1>} />
    </Switch>
  </BrowserRouter>
);

export default Routes;
