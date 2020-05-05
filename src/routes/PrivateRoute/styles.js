import { makeStyles } from '@material-ui/core/styles';

const styles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  container: {
    display: 'flex',
    flexDirection: 'row',
    flex: 1,
    height: '100%',
  },
  component: {
    padding: 15,
    backgroundColor: theme.palette.primary.bg,
    height: '100%',
  },
}));

export default styles;
