import React from 'react';
import PropTypes from 'prop-types';

const RouteContainer = ({ route, ...props }) => <route.component routes={route.routes} {...props} />;

RouteContainer.propTypes = {
  route: PropTypes.object.isRequired,
};

export default RouteContainer;
