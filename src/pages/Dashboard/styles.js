import { makeStyles } from '@material-ui/core';

export const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  headerPage: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 20,
  },
  filters: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-end',
    padding: 20,
  },
  filterButton: {
    margin: '0 10px',
    '&:last-child': {
      marginRight: 0,
    },
  },
  container: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  dateInputContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    margin: '0 10px',
    '&:last-child': {
      marginRight: 0,
    },

    '& span': {
      marginRight: 5,
    },
  },
}));

// export const materialTheme = createMuiTheme({
//   overrides: {
//     MuiInput-root: {
//       toolbar: {
//         backgroundColor: lightBlue.A200,
//       },
//     },
//     MuiPickersCalendarHeader: {
//       switchHeader: {
//         // backgroundColor: lightBlue.A200,
//         // color: "white",
//       },
//     },
//     MuiPickersDay: {
//       day: {
//         color: lightBlue.A700,
//       },
//       daySelected: {
//         backgroundColor: lightBlue['400'],
//       },
//       dayDisabled: {
//         color: lightBlue['100'],
//       },
//       current: {
//         color: lightBlue['900'],
//       },
//     },
//     MuiPickersModal: {
//       dialogAction: {
//         color: lightBlue['400'],
//       },
//     },
//   },
// });
