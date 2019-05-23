import React from 'react';
import { Route } from 'react-router-dom';

// import store from '../store';

const PrivateRoute = ({ component: Component, ...rest }) => (
  /* <Route
    {...rest}
    render={props => (store.getState().auth.signedIn ? (
      <Component {...props} />
    ) : (
      <Redirect to={{ pathname: '/signin', state: { from: props.location } }} />
    ))
    }
  /> */
  <Route {...rest} render={props => <Component {...props} />} />
);

export default PrivateRoute;
