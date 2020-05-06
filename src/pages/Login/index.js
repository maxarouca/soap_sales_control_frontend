// /* eslint-disable react/prop-types */
import React from 'react';
import { useDispatch } from 'react-redux';
import { TextField, Button } from '@material-ui/core';

import { successLogin } from 'redux/auth/auth.actions';
import { useStyles } from './styles';
import api from '../../services/api';

const Login = (props) => {
  const classes = useStyles();
  const dispatch = useDispatch();

  const [values, setValues] = React.useState({
    email: '',
    password: '',
  });

  const handleChange = (name) => (event) => {
    setValues({ ...values, [name]: event.target.value });
  };

  const handleSubmit = async (email, password) => {
    const { data } = await api.post('/login', {
      email,
      password,
    });

    if (data) {
      dispatch(
        successLogin({
          ...data.user,
          token: data.token,
        })
      );

      props.history.push({
        pathname: '/dashboard',
      });
    }
  };

  return (
    <div className={classes.root}>
      <aside className={classes.aside}>
        <h1>
          <img
            src="assets/images/logos/logo_white.png"
            alt="Logo Inova"
            className={classes.logo}
          />
        </h1>
      </aside>
      <main className={classes.main}>
        <h1 className={classes.title}>Entrar</h1>
        <TextField
          id="outlined-name"
          label="Email"
          className={classes.textField}
          value={values.name}
          onChange={handleChange('email')}
          margin="normal"
          variant="outlined"
        />
        <TextField
          id="outlined-name"
          label="Senha"
          className={classes.textField}
          value={values.password}
          onChange={handleChange('password')}
          margin="normal"
          variant="outlined"
          type="password"
        />
        <Button
          variant="contained"
          color="primary"
          size="large"
          className={classes.button}
          onClick={() => handleSubmit(values.email, values.password)}
        >
          Entrar
        </Button>
      </main>
    </div>
  );
};

export default Login;
