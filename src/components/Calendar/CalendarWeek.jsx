import React, {useEffect, useState, useLayoutEffect} from 'react';
import PropTypes from 'prop-types';
import CalendarDay from './CalendarDay';

const CalendarWeek = ({weekDays}) => {
	return (
		<tr key={`week-${weekDays[0]}`}>
			{weekDays.map((day, idx) => (
				<CalendarDay day={day} idx={idx} key={`calendar-day-${idx}`} />
			))}
		</tr>
	);
};

CalendarWeek.propTypes = {
	weekDays: PropTypes.array,
};
CalendarWeek.defaultProps = {
	weekDays: [],
};

export default CalendarWeek;
