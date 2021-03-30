import React, {useState} from 'react';
import {makeStyles} from '@material-ui/core';

import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';

import styles from './styles';

const useStyles = makeStyles(styles, {name: 'Default'});

const Default = ({onClose, reminder, ...props}) => {
	const classes = useStyles();
	const arr = [...Array(24).keys()];

	const createReminder = (hour) => {
		props.addReminder(props.date, {...reminder, [hour]: 'hello'});
	};

	console.log(props);
	return (
		<div className={classes.root}>
			<ButtonGroup
				orientation="vertical"
				color="primary"
				aria-label="vertical contained primary button group"
				variant="contained">
				{arr.map((hour) => {
					return (
						<Button
							onClick={(hour) => createReminder(hour)}
							key={`base-component-${hour}`}>{`${hour}:00`}</Button>
					);
				})}
			</ButtonGroup>
			{props.reminder && (
				<div>{Object.keys(reminder).map((key) => reminder[key])}</div>
			)}
		</div>
	);
};

export default Default;
