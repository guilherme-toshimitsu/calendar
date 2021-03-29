import React from 'react';
import PropTypes from 'prop-types';

const MainStyle = ({ children }) => {
  return <section >{children}</section>;
};

MainStyle.defaultProps = {};

MainStyle.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.node),
  ]).isRequired,
};

export default MainStyle;
