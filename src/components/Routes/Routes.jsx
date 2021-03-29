import React from 'react';
import PropTypes from 'prop-types';
import { Route, Switch } from 'react-router-dom';

import RouteAuth from './RouteAuth';

const Routes = ({ routes, ...props }) => {
  return (
    <Switch>
      {routes.map((route, index) => (
        <Route
          key={index}
          path={route.path}
          exact={route.exact}
          render={(renderProps) => <RouteAuth {...renderProps} route={route} />}
        />
      ))}
    </Switch>
  );
};

Routes.propTypes = {
  routes: PropTypes.arrayOf(PropTypes.object.isRequired).isRequired,
};

export default Routes;
