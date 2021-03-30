import { createContext } from 'react';

const SnackBarContext = createContext({
  snackValues: {
    vertical: 'top',
    horizontal: 'right',
    snackbarType: 'success',
    message: 'general.ok',
    autoClose: false,
    onSuccess: () => {},
  },
  openSnackBar: () => {},
});
const SnackBarProvider = SnackBarContext.Provider;
const SnackBarConsumer = SnackBarContext.Consumer;

export default SnackBarContext;
export { SnackBarConsumer, SnackBarProvider, SnackBarContext };
