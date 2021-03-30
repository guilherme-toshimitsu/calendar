import React from 'react';
import PropTypes from 'prop-types';

import {makeStyles} from '@material-ui/core';

import styles from './styles';

const useStyles = makeStyles(styles, {name: 'ContentBox'});

const MainStyle = ({children}) => {
	const classes = useStyles();

	return <section className={classes.root}>{children}</section>;
};

MainStyle.defaultProps = {};

MainStyle.propTypes = {
	children: PropTypes.oneOfType([
		PropTypes.node,
		PropTypes.arrayOf(PropTypes.node),
	]).isRequired,
};

export default MainStyle;
