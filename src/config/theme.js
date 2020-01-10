import red from '@material-ui/core/colors/red';
import { createMuiTheme } from '@material-ui/core/styles';

// A custom theme for this app
const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#2CC197',
      hover: '#16aa80',
      bg: '#e1efeb',
      dark: '#2D3741',
      darker: '#111921',
      light: '#9B9FB0',
      lighter: '#FFF',
    },
    secondary: {
      main: '#404C59',
      hover: '#333f4c',
    },
    error: {
      main: red.A400,
    },
    background: {
      default: '#fff',
    },
  },
});

export default theme;
