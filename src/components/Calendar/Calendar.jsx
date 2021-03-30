import React from 'react';

import moment from 'moment';

import CalendarWrapper from './CalendarWrapper';
import Weekdays from './Weekdays';
import CalendarBody from './CalendarBody';
import MonthPicker from './MonthPicker';

const Calendar = () => {
	return (
		<CalendarWrapper>
			<MonthPicker />
			<table>
				<thead>
					<Weekdays />
				</thead>
				<CalendarBody />
			</table>
		</CalendarWrapper>
	);
};

export default Calendar;
