import React from 'react';
import { useStyles } from './styles';
// import api from '../../services/api'

const Dashboard = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <h1>Dashboard</h1>
    </div>
  );
};

export default Dashboard;
