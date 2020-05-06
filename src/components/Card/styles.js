import { makeStyles } from '@material-ui/core';

export const useStyles = makeStyles((theme) => ({
  card: {
    width: 'calc(50% - 40px)',
    minWidth: 275,
    margin: 20,
    position: 'relative',
  },
  pos: {
    marginBottom: 12,
  },
  cardValue: {
    color: (props) => `rgb(${props.color})`,
    fontWeight: '700',
  },
  icon: {
    position: 'absolute',
    right: 0,
    top: 0,
    fontSize: '155px',
    color: (props) => `rgba(${props.color},0.4)`,
  },
}));
