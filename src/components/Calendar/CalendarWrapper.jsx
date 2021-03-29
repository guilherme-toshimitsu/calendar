import React, {useEffect, useReducer} from 'react';
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

	var locale = window.navigator.language || window.navigator.userLanguage;

	moment.locale(locale);
	//TODO Remove email from session -> will get from token when backend is ready

	const actionResolver = {};

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
