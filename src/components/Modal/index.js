import { useContext } from 'react';
import Modal from './Modal';
import ModalWrapper from './ModalWrapper';
import { ModalConsumer, ModalProvider, ModalContext } from './modalContext';

const useModal = () => useContext(ModalContext);

export default Modal;
export { useModal, ModalWrapper, ModalConsumer, ModalProvider, ModalContext };
