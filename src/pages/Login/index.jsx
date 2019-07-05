// /* eslint-disable react/prop-types */
import React from 'react'
import { connect } from 'react-redux'
import compose from 'recompose/compose'
import { TextField, Button } from '@material-ui/core'

import { withStyles } from '@material-ui/core/styles'
// import { bindActionCreators } from 'redux'
import styles from './styles'
// import api from '../../services/api'

const Dashboard = (props) => {
  const [values, setValues] = React.useState({
    email: '',
    password: '',
  })

  const handleChange = name => (event) => {
    setValues({ ...values, [name]: event.target.value })
  }

  const handleSubmit = (email, password) => {
    if (email === 'dev@inovamind.com.br' && password === 'inova@2019') {
      console.log('login efetuado com sucesso')
      props.history.push({
        pathname: '/dashboard',
      })
    } else {
      alert('Email ou senha inválidos')
    }
  }

  const classes = styles()

  return (
    <div className={classes.root}>
      <aside className={classes.aside}>
        <h1>
          <img
            src="assets/images/logos/inova_white.svg"
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
  )
}

const mapStateToProps = store => ({
  auth: store.auth,
})

export default compose(
  withStyles(styles, { withTheme: true }),
  connect(
    mapStateToProps,
    null,
  ),
)(Dashboard)