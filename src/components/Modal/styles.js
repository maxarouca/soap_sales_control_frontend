import { makeStyles } from '@material-ui/core';

export const useStyles = makeStyles((theme) => ({
  inputsContainer: {
    display: 'flex',
    flexDirection: 'column',
    width: 400,
  },
  dateInput: {
    margin: '17px 0 0 0',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  taxContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  label: {
    fontSize: 16,
    marginRight: 20,
  },
  button: {
    width: 170,
    '&:hover': {
      backgroundColor: theme.palette.primary.hover,
    },
    '& span': {
      fontSize: 12,
    },
  },
  total: {
    width: '100%',
    margin: '17px 0 17px 0',
  },
  totalValue: {
    fontSize: 20,
    fontWeight: '700',
  },
  error: {
    width: 400,
    color: 'rgb(255, 55, 0)',
  },
}));
