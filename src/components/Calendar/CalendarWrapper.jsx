import React, {useEffect, useReducer, useLayoutEffect} from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';

import {createReducer} from '@utils/createReducer';

import * as actionTypes from './Reducer/calendarActionTypes';
import actions from './Reducer/calendarActions';
import initialState from './Reducer/calendarState';
import {CalendarContextProvider} from './calendarContext';

const reducer = createReducer(actions);

const CalendarWrapper = ({children}) => {
	const [state, dispatch] = useReducer(reducer, initialState);

	const getMonthFormat = (month) => {
		let viewedDay = new Date();
		if (month !== undefined) {
			viewedDay.setMonth(month);
		}

		const firstdayOfMonth = moment(viewedDay).startOf('month').format('d');
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
		return numberedDays;
	};

	const getMonthName = (monthNumber) => {
		let viewedDay = new Date();
		if (monthNumber !== undefined) {
			viewedDay.setMonth(monthNumber);
		}

		return moment(viewedDay).format('MMMM');
	};
	//TODO Remove email from session -> will get from token when backend is ready
	useLayoutEffect(() => {
		var locale = window.navigator.language || window.navigator.userLanguage;
		moment.locale(locale);
		const weekdayNames = moment.weekdaysShort();
		let today = moment();
		const monthName = today.format('MMMM');

		dispatch({
			type: actionTypes.SET_CALENDAR,
			currentMonthName: monthName,
			weekdays: weekdayNames,
			months: moment.months(),
			today: today.day,
			currentMonth: getMonthFormat(),
			currentViewedMonth: getMonthFormat(),
			currentViewedMonthIdx: today.format('M'),
		});
	}, []);

	const actionResolver = {
		selectViewedMonth: (idx) =>
			dispatch({
				type: actionTypes.SELECT_VIEWED_MONTH,
				currentMonthName: getMonthName(idx),
				currentViewedMonth: getMonthFormat(idx),
				currentViewedMonthIdx: idx,
			}),
		addReminder: (day, reminder) =>
			dispatch({
				type: actionTypes.SET_REMINDER,
				reminderKey: day,
				reminder: reminder,
			}),
	};

	return (
		<CalendarContextProvider value={[state, actionResolver]}>
			{children}
		</CalendarContextProvider>
	);
};

CalendarWrapper.propTypes = {
	children: PropTypes.oneOfType([
		PropTypes.element,
		PropTypes.arrayOf(PropTypes.element),
	]).isRequired,
};

export default CalendarWrapper;
