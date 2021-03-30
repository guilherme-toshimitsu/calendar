import React from 'react';
import PropTypes from 'prop-types';
import { Dialog } from '@material-ui/core';
import { useModal } from '@components/Modal';
import modalParser from './modalParser.js';

const Modal = () => {
  const [{ selectedModal, props, open }, { closeModal }] = useModal();

  const CustomComponent = modalParser[selectedModal] ? modalParser[selectedModal] : modalParser['default'];
  return (
    <Dialog disableBackdropClick open={open} onClose={() => closeModal()}>
      <CustomComponent {...props} onClose={() => closeModal()} />
    </Dialog>
  );
};

Modal.defaultProps = {
  open: false,
};

Modal.propTypes = {
  open: PropTypes.bool,
};

export default Modal;
