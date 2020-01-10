import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';

import {
  AppBar,
  Toolbar,
  Popper,
  Grow,
  Paper,
  Typography,
  InputBase,
  MenuItem,
  MenuList,
  ClickAwayListener,
} from '@material-ui/core';

import {
  Assessment,
  Dns,
  CheckCircle,
  ArrowDropDownCircle,
  InsertEmoticon,
  Cancel,
  Search as SearchIcon,
} from '@material-ui/icons';

import styles from './styles';

const MainNavbar = () => {
  const classes = styles();
  const [open, setOpen] = React.useState(false);
  const anchorRef = React.useRef(null);

  function handleToggle() {
    setOpen(prevOpen => !prevOpen);
  }

  function handleClose(event) {
    if (anchorRef.current && anchorRef.current.contains(event.target)) {
      return;
    }

    setOpen(false);
  }

  const renderMenu = (
    <Popper
      open={open}
      anchorEl={anchorRef.current}
      keepMounted
      transition
      disablePortal
    >
      {({ TransitionProps, placement }) => (
        <Grow
          {...TransitionProps}
          style={{
            transformOrigin:
              placement === 'bottom' ? 'center top' : 'center bottom',
          }}
        >
          <Paper id="menu-list-grow">
            <ClickAwayListener onClickAway={handleClose}>
              <MenuList
                classes={{
                  root: classes.dropdown,
                }}
              >
                <MenuItem onClick={handleClose}>Profile</MenuItem>
                <MenuItem onClick={handleClose}>My account</MenuItem>
                <MenuItem onClick={handleClose}>Logout</MenuItem>
              </MenuList>
            </ClickAwayListener>
          </Paper>
        </Grow>
      )}
    </Popper>
  );

  return (
    <div className={classes.root}>
      <AppBar position="static" style={{ backgroundColor: '#2CC197' }}>
        <Toolbar>
          <div className={classes.sectionDesktop}>
            <ul className={classes.listNav}>
              {/* <li className={classes.listNavItem}>
                <Typography color="inherit">
                  <Link className={classes.menuItem} to="/">
                    DASHBOARD
                  </Link>
                </Typography>
                <Assessment />
              </li> */}

              {/* <li className={classes.listNavItem} ref={anchorRef}>
                <Typography
                  color="inherit"
                  onClick={handleToggle}
                  className={classes.menuItem}
                >
                  CONSULTAR
                  <ArrowDropDownCircle className={classes.menuIcon} />
                </Typography>
              </li> */}
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
  );
};

MainNavbar.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(MainNavbar);
