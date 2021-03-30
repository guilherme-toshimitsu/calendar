import React, {useReducer} from 'react';
import PropTypes from 'prop-types';

import {createReducer} from '@utils/createReducer';

import {ModalProvider} from './modalContext';
import Modal from './Modal';
import * as actionTypes from './Reducer/modalActionTypes';
import actions from './Reducer/modalActions';
import initialState from './Reducer/modalState';

const reducer = createReducer(actions);

const ModalWrapper = ({children}) => {
	const [state, dispatch] = useReducer(reducer, initialState);

	const actionResolver = {
		openModal: () => dispatch({type: actionTypes.OPEN_MODAL}),
		closeModal: () => dispatch({type: actionTypes.CLOSE_MODAL}),
		loadProps: (props) => dispatch({type: actionTypes.LOAD_PROPS, props}),
		selectModal: (selectedModal) =>
			dispatch({type: actionTypes.SELECT_MODAL, selectedModal}),
	};

	return (
		<ModalProvider value={[state, actionResolver]}>
			<Modal />
			{children}
		</ModalProvider>
	);
};

ModalWrapper.propTypes = {
	children: PropTypes.oneOfType([
		PropTypes.element,
		PropTypes.arrayOf(PropTypes.element),
	]).isRequired,
};

export default ModalWrapper;
