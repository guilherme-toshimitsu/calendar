import { createContext } from 'react';

const ModalContext = createContext({
  openModal: () => {},
  closeModal: () => {},
  pickModal: () => {},
});
const ModalProvider = ModalContext.Provider;
const ModalConsumer = ModalContext.Consumer;

export default ModalContext;
export { ModalConsumer, ModalProvider, ModalContext };
