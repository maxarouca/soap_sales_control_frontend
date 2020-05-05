import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { connect, useSelector } from 'react-redux';
import compose from 'recompose/compose';
import MainNavbar from 'components/MainNavbar';
import Sidebar from 'components/Sidebar';
import { withStyles } from '@material-ui/core/styles';
import styles from './styles';
// import jwtDecode from 'jwt-decode'

const PrivateRoute = ({ component: Component, auth, history, ...rest }) => {
  const { token } = useSelector((state) => state.auth);
  const classes = styles();

  const isAuth = () => {
    if (token) {
      return true;
    }
    if (token === null) {
      return false;
    }
    return false;
  };

  return (
    <Route
      {...rest}
      render={(props) =>
        isAuth() ? (
          <div className={classes.container}>
            {/* <Sidebar /> */}
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                width: '100%',
              }}
            >
              <MainNavbar />
              <div className={classes.component}>
                <Component {...props} />
              </div>
            </div>
          </div>
        ) : (
          <Redirect
            to={{
              pathname: '/',
              state: { from: props.location },
            }}
          />
        )
      }
    />
  );
};

export default PrivateRoute;
