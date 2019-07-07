import { makeStyles } from '@material-ui/core/styles'

const styles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  container: {
    display: 'flex',
    flexDirection: 'row',
  },
  component: {
    padding: 15,
    backgroundColor: theme.palette.primary.bg,
    height: '100%',
  },
}))

export default styles
