import React from 'react'
import { Route, Switch, BrowserRouter } from 'react-router-dom'

import Dashboard from 'pages/Dashboard'
import Login from 'pages/Login'
import Private from './private'

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Private path="/" exact component={Login} />
      <Private path="/dashboard" component={Dashboard} />
      <Route path="*" component={() => <h1>Page not found</h1>} />
    </Switch>
  </BrowserRouter>
)

export default Routes
