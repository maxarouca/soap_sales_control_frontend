import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from 'redux/auth/auth.actions';

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
  InsertEmoticon,
  Cancel,
  Search as SearchIcon,
  Assessment,
  ArrowDropDownCircle,
} from '@material-ui/icons';

import { useStyles } from './styles';

const MainNavbar = () => {
  const classes = useStyles();
  const dispatch = useDispatch();

  const name = useSelector((state) => state.auth.name);

  const [open, setOpen] = React.useState(false);
  const anchorRef = React.useRef(null);

  // function handleToggle() {
  //   setOpen((prevOpen) => !prevOpen);
  // }

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
              <li className={classes.listNavItem}>
                <Typography color="inherit">
                  <Link className={classes.menuItem} to="/">
                    DASHBOARD
                  </Link>
                </Typography>
                <Assessment />
              </li>

              <li className={classes.listNavItem} ref={anchorRef}>
                <Typography color="inherit">
                  CONSULTAR
                  <ArrowDropDownCircle className={classes.menuIcon} />
                </Typography>
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
                {name && <Typography color="inherit">{name}</Typography>}
              </li>
              <li
                className={classes.listNavItem}
                onClick={() => dispatch(logout())}
              >
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

export default MainNavbar;
