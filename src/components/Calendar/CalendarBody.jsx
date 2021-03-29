import React, {useEffect, useState, useLayoutEffect} from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';

import CalendarWeek from './CalendarWeek';

const CalendarBody = ({}) => {
	const [calendarDays, setCalendarDays] = useState(Array(35).fill(null));

	useEffect(() => {
		const firstdayOfMonth = moment().startOf('month').format('d');
		const numberedDays = [];
		for (let i = 0; i < 35; i++) {
			if (i < firstdayOfMonth) {
				numberedDays.push(null);
			} else {
				if (i <= moment().daysInMonth()) {
					numberedDays.push(i - firstdayOfMonth + 1);
				} else {
					numberedDays.push(null);
				}
			}
		}
		setCalendarDays(numberedDays);

		console.log(numberedDays);
	}, []);

	return (
		<tbody>
			<CalendarWeek weekDays={calendarDays.slice(0, 7)} />
			<CalendarWeek weekDays={calendarDays.slice(7, 14)} />
			<CalendarWeek weekDays={calendarDays.slice(14, 21)} />
			<CalendarWeek weekDays={calendarDays.slice(21, 28)} />
			<CalendarWeek weekDays={calendarDays.slice(28)} />
		</tbody>
	);
};

CalendarBody.propTypes = {};

export default CalendarBody;
