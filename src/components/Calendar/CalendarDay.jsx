import React, {useEffect, useState, useLayoutEffect} from 'react';
import PropTypes from 'prop-types';

import {useCalendar} from './';
import moment from 'moment';

const CalendarDay = ({day, idx}) => {
	const [{currentViewedMonthIdx, reminders}, {addReminder}] = useCalendar();
	let currentDay = new Date();
	currentDay.setMonth(currentViewedMonthIdx);
	currentDay.setDate(day);

	let date = moment(currentDay).startOf('day').toString();
	if (reminders[date]) {
		console.log(reminders);
		console.log(day);
		console.log(reminders[date]);
	}

	return (
		<td key={`day-${day}-${idx}`}>
			<button onClick={() => addReminder(date, {text: 'do something'})}>
				{day}
			</button>
			{reminders[date] && 'olaaaa'}
		</td>
	);
};

CalendarDay.propTypes = {
	day: PropTypes.number,
	idx: PropTypes.number,
};

export default CalendarDay;
