import { fade } from '@material-ui/core/styles/colorManipulator'
import { makeStyles } from '@material-ui/core/styles'

export default makeStyles(theme => ({
  root: {
    width: '100%',
  },
  grow: {
    flexGrow: 1,
  },
  sectionLogo: {
    display: 'flex',
    marginRight: '4rem',
  },
  logoImg: {
    width: 130,
    height: 35,
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
  // title: {
  //   display: 'none',
  //   [theme.breakpoints.up('sm')]: {
  //     display: 'block',
  //   },
  // },
  sectionUser: {
    display: 'flex',
    minHeight: 'inherit',
  },
  listNav: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  listNavItem: {
    height: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    paddingLeft: 20,
    paddingRight: 20,
    transition: 'all 0.2s',

    '&:hover': {
      backgroundColor: theme.palette.primary.hover,
      cursor: 'pointer',
    },
  },
  listNavItemUsername: {
    height: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    paddingLeft: 20,
    paddingRight: 20,
  },
  listNavItemSep: {
    marginLeft: 10,
  },
  menuItem: {
    display: 'flex',
    alignItems: 'center',
    textDecoration: 'none',
    color: '#ffffff',
    marginRight: 10,
  },
  menuIcon: {
    marginLeft: 10,
  },
  dropdown: {
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.primary.lighter,
  },
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(3),
      width: 'auto',
    },
  },
  searchIcon: {
    width: theme.spacing(9),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputRoot: {
    color: 'inherit',
    width: '100%',
  },
  inputInput: {
    paddingTop: theme.spacing(),
    paddingRight: theme.spacing(),
    paddingBottom: theme.spacing(),
    paddingLeft: theme.spacing(10),
    transition: theme.transitions.create('width'),
    width: '100%',
  },
  sectionDesktop: {
    minHeight: 'inherit',
    display: 'none',
    [theme.breakpoints.up('lg')]: {
      display: 'flex',
    },
  },
  sectionMobile: {
    display: 'flex',
    [theme.breakpoints.up('lg')]: {
      display: 'none',
    },
  },
}))
