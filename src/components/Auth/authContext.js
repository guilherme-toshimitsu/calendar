import { createContext } from 'react';

const AuthContext = createContext({
  authenticated: false,
  token: null,
});

const AuthContextProvider = AuthContext.Provider;
const AuthContextConsumer = AuthContext.Consumer;

export { AuthContextConsumer, AuthContextProvider, AuthContext };
