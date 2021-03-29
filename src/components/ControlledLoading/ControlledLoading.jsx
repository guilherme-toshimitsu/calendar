import React from 'react';
import PropTypes from 'prop-types';

const CircularProgress = () => <div>rodar</div>

const ControlledLoading = ({ isLoading, loadingComponent, children, renderComponent }) => {
  return isLoading ? loadingComponent : <>{children ? children : renderComponent}</>;
};

ControlledLoading.defaultProps = {
  className: '',
  loadingComponent: <CircularProgress />,
};

ControlledLoading.propTypes = {
  isLoading: PropTypes.bool.isRequired,
  loadingComponent: PropTypes.oneOfType([PropTypes.element, PropTypes.arrayOf(PropTypes.element)]),
  children: PropTypes.any,
  renderComponent: PropTypes.any,
};

export default ControlledLoading;
