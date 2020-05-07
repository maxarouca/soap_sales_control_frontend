import { makeStyles } from '@material-ui/core';

export const useStyles = makeStyles((theme) => ({
  isPay: {
    color: '#04CC46',
  },
  notPay: {
    color: '#FF3701',
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
}));
