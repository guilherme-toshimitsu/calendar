import React, { useEffect, useReducer } from 'react';
import PropTypes from 'prop-types';

import { createReducer } from '@utils/createReducer';
import Api from '@api/';

import * as actionTypes from './Reducer/authActionTypes';
import actions from './Reducer/authActions';
import initialState from './Reducer/authState';
import { AuthContextProvider } from './authContext';

const reducer = createReducer(actions);

const AuthProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  //TODO Remove email from session -> will get from token when backend is ready
  useEffect(() => {
    let token = sessionStorage.getItem('token');
    let email = sessionStorage.getItem('email');
    if (token) {
      //TODO TOKEN VALIDATION
      dispatch({ type: actionTypes.LOGIN, email });
    } else {
      dispatch({ type: actionTypes.LOGOUT });
    }
  }, []);

  const doLogin = (data, history) =>
    Api.auth
      .login(data)
      .then((res) => {
        dispatch({ type: actionTypes.LOGIN, email: data.email });
        sessionStorage.setItem('token', res.token);
        sessionStorage.setItem('email', data.email);
        history.push('/');
      })
      .catch((err) => {
        console.log(err)
      });

  const doLogout = () => {
    sessionStorage.removeItem('token');
    sessionStorage.removeItem('email');
    dispatch({ type: actionTypes.LOGOUT });
  };

  const actionResolver = {
    doLogin: doLogin,
    doLogout: doLogout,
    updateSession: () => dispatch({ type: actionTypes.UPDATE_SESSION }),
  };
  return (
    <AuthContextProvider value={[state, actionResolver]}>
      {children}
    </AuthContextProvider>
  );
};

AuthProvider.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.arrayOf(PropTypes.element),
  ]).isRequired,
};

export default AuthProvider;
