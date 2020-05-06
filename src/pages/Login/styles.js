import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'row',
    height: '100vh',
  },
  aside: {
    display: 'flex',
    flexDirection: 'row',
    width: '35%',
    background:
      'linear-gradient(0deg, rgba(113, 226, 192,0.8), rgba(27, 155, 117,0.8)), url(assets/images/login_bg.jpg)',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPositionX: 'center',
    padding: 20,
  },
  logo: {
    width: 250,
  },
  main: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    // justifyContent: 'center',
    padding: 20,
    paddingTop: 200,
    width: '65%',
  },
  title: {
    marginBottom: 50,
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: 350,
  },
  button: {
    margin: theme.spacing(1),
    width: 350,
    '&:hover': {
      backgroundColor: theme.palette.primary.hover,
    },
  },
}));
