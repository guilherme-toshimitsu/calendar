import { useContext } from 'react';
import {
  AuthContextConsumer,
  AuthContext,
  AuthContextProvider,
} from './authContext';

import AuthWrapper from './AuthWrapper';

const useAuth = () => useContext(AuthContext);

export default AuthWrapper;
export { useAuth, AuthContextConsumer, AuthContextProvider };
