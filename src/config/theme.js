import red from '@material-ui/core/colors/red'
import { createMuiTheme } from '@material-ui/core/styles'

// A custom theme for this app
const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#CA1948',
      hover: '#ba103d',
      bg: '#f9edf0',
      dark: '#192131',
      darker: '#070F20',
      light: '#9B9FB0',
      lighter: '#FFF',
    },
    secondary: {
      main: '#343A40',
      hover: '#61656b',
    },
    error: {
      main: red.A400,
    },
    background: {
      default: '#fff',
    },
  },
})

export default theme
