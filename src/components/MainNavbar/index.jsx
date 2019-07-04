import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import { Link } from 'react-router-dom'

import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  InputBase,
  MenuItem,
  Menu,
} from '@material-ui/core'

import {
  Assessment,
  Dns,
  CheckCircle,
  ArrowDropDownCircle,
  InsertEmoticon,
  Cancel,
  Search as SearchIcon,
  More as MoreIcon,
} from '@material-ui/icons'

import styles from './styles'

class MainNavbar extends React.Component {
  state = {
    anchorEl: null,
  }

  handleProfileMenuOpen = (event) => {
    this.setState({ anchorEl: event.currentTarget })
  }

  handleMenuClose = () => {
    this.setState({ anchorEl: null })
  }

  render() {
    const { anchorEl } = this.state
    const { classes } = this.props
    const isMenuOpen = Boolean(anchorEl)

    const renderMenu = (
      <Menu
        anchorEl={anchorEl}
        anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
        transformOrigin={{ vertical: 'top', horizontal: 'right' }}
        open={isMenuOpen}
        onClose={this.handleMenuClose}
      >
        <MenuItem onClick={this.handleMenuClose}>
          <Link style={{ textDecoration: 'none' }} to="/consult_operator">
            Operador
          </Link>
        </MenuItem>
        <MenuItem onClick={this.handleMenuClose}>
          <Link style={{ textDecoration: 'none' }} to="/consult_plate">
            Placa
          </Link>
        </MenuItem>
        <MenuItem onClick={this.handleMenuClose}>
          <Link style={{ textDecoration: 'none' }} to="/consult_container">
            Container
          </Link>
        </MenuItem>
      </Menu>
    )

    return (
      <div className={classes.root}>
        <AppBar position="static" style={{ backgroundColor: '#CB184B' }}>
          <Toolbar>
            <div className={classes.sectionMobile}>
              <IconButton
                aria-haspopup="true"
                onClick={() => {}}
                color="inherit"
              >
                <MoreIcon />
              </IconButton>
            </div>

            <div className={classes.sectionLogo}>
              <img
                className={classes.logoImg}
                src="assets/images/logos/inova_white.svg"
                alt="logo"
              />
              <Typography
                className={classes.title}
                variant="h6"
                color="inherit"
                noWrap
              >
                Boilerplate
              </Typography>
            </div>

            <div className={classes.sectionDesktop}>
              <ul className={classes.listNav}>
                <li className={classes.listNavItem}>
                  <Typography color="inherit">
                    <Link
                      style={{ textDecoration: 'none', color: '#ffffff' }}
                      to="/"
                    >
                      DASHBOARD
                    </Link>
                  </Typography>
                  <div className={classes.listNavItemSep} />
                  <Assessment />
                </li>

                <li className={classes.listNavItem}>
                  <Typography color="inherit">
                    <Link
                      style={{ textDecoration: 'none', color: '#ffffff' }}
                      to="/containers_list"
                    >
                      LISTAR CONTAINERS
                    </Link>
                  </Typography>
                  <div className={classes.listNavItemSep} />
                  <Dns />
                </li>

                <li className={classes.listNavItem}>
                  <Typography color="inherit">
                    <Link
                      style={{ textDecoration: 'none', color: '#ffffff' }}
                      to="/analyze_container"
                    >
                      ANALISAR
                    </Link>
                  </Typography>
                  <div className={classes.listNavItemSep} />
                  <CheckCircle />
                </li>

                <li className={classes.listNavItem}>
                  <Typography
                    onClick={this.handleProfileMenuOpen}
                    color="inherit"
                  >
                    CONSULTAR
                  </Typography>
                  <div className={classes.listNavItemSep} />
                  <ArrowDropDownCircle onClick={this.handleProfileMenuOpen} />
                </li>
              </ul>
            </div>

            <div className={classes.grow} />

            <div className={classes.search}>
              <div className={classes.searchIcon}>
                <SearchIcon />
              </div>
              <InputBase
                placeholder="Buscar"
                classes={{
                  root: classes.inputRoot,
                  input: classes.inputInput,
                }}
              />
            </div>

            <div className={classes.sectionUser}>
              <ul className={classes.listNav}>
                <li className={classes.listNavItemUsername}>
                  <InsertEmoticon />
                  <div className={classes.listNavItemSep} />
                  <Typography color="inherit">USERNAME</Typography>
                </li>
                <li className={classes.listNavItem}>
                  <Cancel />
                </li>
              </ul>
            </div>
          </Toolbar>
        </AppBar>
        {renderMenu}
      </div>
    )
  }
}

MainNavbar.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(MainNavbar)
