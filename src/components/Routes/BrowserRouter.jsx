import React, { useContext } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { __RouterContext } from 'react-router-dom';

const ExtenderRouter = (props) => {
  const context = useContext(__RouterContext);
  context['settings'] = {
    ...context['settings'],
    ...props.settings,
  };
  return <>{props.children}</>;
};

const BrowserRouter = (props) => (
  <Router {...props}>
    <ExtenderRouter settings={props.settings}>{props.children}</ExtenderRouter>
  </Router>
);

export default BrowserRouter;
