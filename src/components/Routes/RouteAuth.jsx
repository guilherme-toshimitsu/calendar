import React from 'react';
import PropTypes from 'prop-types';

import { Redirect } from 'react-router-dom';

import { useAuth } from '@components/Auth';

import RouteContainer from './RouteContainer';

const RouteCheck = ({ route, ...props }) => {
  const [{ authenticated, role }] = useAuth();

  if (!route.protected) {
    return <RouteContainer route={route} {...props} />;
  }

  // Auth
  // if (!authenticated) {
  //   return <Redirect to="/login" />;
  // }

  // TODO: ROLE SELECTION
  // if (route.roles.length && !route.roles.includes(role)) {
  // return <Redirect to="/" />;
  // }

  return <RouteContainer route={route} {...props} />;
};

RouteCheck.propTypes = {
  route: PropTypes.object.isRequired,
  hasAuthorization: PropTypes.func,
  hasAuthentication: PropTypes.func,
  authenticationAction: PropTypes.func,
  authorizationAction: PropTypes.func,
};

export default RouteCheck;
