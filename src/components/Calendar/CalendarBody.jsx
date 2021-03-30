import React, {useEffect, useState, useLayoutEffect} from 'react';
import PropTypes from 'prop-types';

import CalendarWeek from './CalendarWeek';
import {useCalendar} from './';

const CalendarBody = ({}) => {
	const [{currentViewedMonth}] = useCalendar();

	return (
		<tbody>
			<CalendarWeek weekDays={currentViewedMonth.slice(0, 7)} />
			<CalendarWeek weekDays={currentViewedMonth.slice(7, 14)} />
			<CalendarWeek weekDays={currentViewedMonth.slice(14, 21)} />
			<CalendarWeek weekDays={currentViewedMonth.slice(21, 28)} />
			<CalendarWeek weekDays={currentViewedMonth.slice(28)} />
		</tbody>
	);
};

CalendarBody.propTypes = {};

export default CalendarBody;
