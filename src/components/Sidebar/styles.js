import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
  root: {},
  aside: {
    width: 300,
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: theme.palette.primary.dark,
    height: '100vh',
  },
  sectionLogo: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    height: 64,
    width: '100%',
    backgroundColor: theme.palette.primary.darker,
    color: theme.palette.primary.lighter,
  },
  logoImg: {
    width: 130,
    height: 35,
  },
  user: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    margin: '15px 0',
  },
  nav: {
    color: theme.palette.primary.light,
  },
  avatar: {
    fontSize: 70,
    color: theme.palette.primary.lighter,
    marginRight: 15,
  },
  listItem: {
    borderLeft: `8px solid ${theme.palette.primary.dark}`,
  },
  selected: {
    backgroundColor: `${theme.palette.primary.darker} !important`,
    borderLeft: `8px solid ${theme.palette.primary.main}`,
  },
  iconLink: {
    color: theme.palette.primary.light,
  },
}));
