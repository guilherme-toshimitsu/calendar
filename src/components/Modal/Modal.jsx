import React from 'react';
import PropTypes from 'prop-types';
import {Drawer, ClickAwayListener} from '@material-ui/core';
import {useModal} from '@components/Modal';
import modalParser from './modalParser.js';

const ModalCustom = () => {
	const [{selectedModal, props, open}, {closeModal}] = useModal();

	const CustomComponent = modalParser[selectedModal]
		? modalParser[selectedModal]
		: modalParser['default'];

	return (
		<Drawer
			variant={'persistent'}
			anchor={'right'}
			open={open}
			ModalProps={{onBackdropClicklick: () => closeModal()}}
			onClose={() => closeModal()}>
			<CustomComponent {...props} onClose={() => closeModal()} />
		</Drawer>
	);
};

ModalCustom.defaultProps = {
	open: false,
};

ModalCustom.propTypes = {
	open: PropTypes.bool,
};

export default ModalCustom;
