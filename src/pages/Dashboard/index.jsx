// /* eslint-disable react/prop-types */
import React from 'react'
import { connect } from 'react-redux'
import compose from 'recompose/compose'
// import { Grid } from '@material-ui/core'
import { withStyles } from '@material-ui/core/styles'
// import { bindActionCreators } from 'redux'
// import MainNavbar from '../../components/MainNavbar'
import styles from './styles'
// import api from '../../services/api'

class Dashboard extends React.Component {
  state = {
    cpf: null,
  }

  render() {
    const { classes } = this.props
    console.log(this.state)

    return (
      <div className={classes.root}>
        <h1>Dashboard</h1>
      </div>
    )
  }
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
