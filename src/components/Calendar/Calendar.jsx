import React from 'react';

import moment from 'moment';

import CalendarWrapper from './CalendarWrapper';
import Weekdays from './Weekdays';
import CalendarBody from './CalendarBody';

const Calendar = () => {
	const weekdayNames = moment.weekdaysShort();
	const monthName = moment().format('MMMM');

	return (
		<CalendarWrapper>
			<div>{monthName}</div>
			<table>
				<thead>
					<Weekdays names={weekdayNames} />
				</thead>
				<CalendarBody />
			</table>
		</CalendarWrapper>
	);
};

export default Calendar;
