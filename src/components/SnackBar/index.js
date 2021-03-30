import { useContext } from 'react';
import SnackBar from './SnackBar';
import SnackWrapper from './SnackBarWrapper';
import { SnackBarContext } from './snackContext';

const useSnackBar = () => useContext(SnackBarContext);

export default SnackBar;
export { useSnackBar, SnackWrapper };
