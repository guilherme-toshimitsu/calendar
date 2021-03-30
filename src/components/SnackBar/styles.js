import green from '@material-ui/core/colors/green';
import amber from '@material-ui/core/colors/amber';
import blue from '@material-ui/core/colors/blue';

const snackBarContentStyles = (theme) => ({
  success: {
    backgroundColor: green[600],
  },
  error: {
    backgroundColor: theme.palette.error.dark,
  },
  info: {
    backgroundColor: blue[600],
  },
  warning: {
    backgroundColor: amber[700],
  },
  icon: {
    fontSize: 20,
  },
  iconVariant: {
    opacity: 0.9,
    marginRight: theme.spacing(),
  },
  message: {
    display: 'flex',
    alignItems: 'center',
    alignText: 'left',
  },
});

const snackBarStyles = (theme) => ({
  root: {
    maxWidth: '70%',
  },
  close: {
    padding: theme.spacing() / 2,
  },
});

export { snackBarStyles, snackBarContentStyles };
