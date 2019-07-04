import React from 'react'
import { Route, Switch, BrowserRouter } from 'react-router-dom'

import Dashboard from 'pages/Dashboard/index'
import Private from './private'


const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Private path="/" exact component={Dashboard} />
      <Private path="/dashboard" component={Dashboard} />
      <Route path="*" component={() => <h1>Page not found</h1>} />
    </Switch>
  </BrowserRouter>
)

export default Routes
