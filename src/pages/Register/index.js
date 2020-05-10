// /* eslint-disable react/prop-types */
import React from 'react';
import { TextField, Button } from '@material-ui/core';

import { useStyles } from './styles';
import api from '../../services/api';
import { Link } from 'react-router-dom';

const Register = (props) => {
  const classes = useStyles();

  const [values, setValues] = React.useState({
    name: '',
    email: '',
    password: '',
  });

  const handleChange = (name) => (event) => {
    setValues({ ...values, [name]: event.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { data } = await api.post('/users', {
      ...values,
    });

    console.log(data);

    if (data) {
      props.history.push({
        pathname: '/',
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
      <form className={classes.main} onSubmit={handleSubmit}>
        <h1 className={classes.title}>Registrar</h1>
        <TextField
          id="outlined-name"
          label="Nome"
          className={classes.textField}
          value={values.name}
          onChange={handleChange('name')}
          margin="normal"
          variant="outlined"
        />
        <TextField
          id="outlined-name"
          label="Email"
          className={classes.textField}
          value={values.email}
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
          onClick={handleSubmit}
        >
          Entrar
        </Button>
        <p>
          Já está registrado? <Link to="/">Entrar</Link>
        </p>
      </form>
    </div>
  );
};

export default Register;
