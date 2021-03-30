import React from 'react';
import {makeStyles} from '@material-ui/core';

import styles from './styles';

const useStyles = makeStyles(styles, {name: 'Default'});

const Default = ({onClose}) => {
	const classes = useStyles();

	return (
		<div className={classes.root}>
			<button onClick={() => onClose()}>Close</button>
			Default Modal
		</div>
	);
};

export default Default;
