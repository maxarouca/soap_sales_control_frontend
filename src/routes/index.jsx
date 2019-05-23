import React from 'react';
import { Route, Switch, BrowserRouter } from 'react-router-dom';

import Private from './private';

import Dashboard from '../pages/Dashboard/index';

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Private path="/" exact component={Dashboard} />
      <Private path="/dashboard" component={Dashboard} />
      <Route path="*" component={() => <h1>Page not found</h1>} />
    </Switch>
  </BrowserRouter>
);

export default Routes;
