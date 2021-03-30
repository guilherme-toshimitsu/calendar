import React, {useEffect, useState, useLayoutEffect} from 'react';
import PropTypes from 'prop-types';

import {useCalendar} from './';
import {useModal} from '@components/Modal';
import moment from 'moment';

const CalendarDay = ({day, idx}) => {
	const [{currentViewedMonthIdx, reminders}, {addReminder}] = useCalendar();
	const [{}, {openModal, loadProps}] = useModal();

	return (
		<td key={`day-${day}-${idx}`}>
			<div
				onClick={() => {
					loadProps({
						addReminder: addReminder,
						date: `${day}-${currentViewedMonthIdx}-${moment().year()}`,
					});
					openModal();
				}}>
				{day}
			</div>
		</td>
	);
};

CalendarDay.propTypes = {
	day: PropTypes.number,
	idx: PropTypes.number,
};

export default CalendarDay;
