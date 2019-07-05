import { makeStyles } from '@material-ui/core/styles'

const styles = makeStyles(theme => ({
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
      'linear-gradient(0deg, rgba(203,25,76,0.8), rgba(203,25,76,1)), url(assets/images/background/bg-check.png)',
    backgroundSize: 'contain',
    backgroundRepeat: 'no-repeat',
    backgroundPositionY: 'bottom',
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
  },
}))

export default styles
