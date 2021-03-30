import * as at from './calendarActionTypes';

export default {
	[at.GET_CALENDAR_DATA]: (state, args) => {
		return {
			...state,
		};
	},
	[at.SET_CALENDAR]: (state, args) => {
		return {
			...state,
			weekdays: args.weekdays,
			currentMonthName: args.currentMonthName,
			months: args.months,
			today: args.today,
			currentMonth: args.currentMonth,
			currentViewedMonth: args.currentViewedMonth,
			currentViewedMonthIdx: args.currentViewedMonthIdx,
		};
	},
	[at.SELECT_VIEWED_MONTH]: (state, args) => {
		return {
			...state,
			currentViewedMonth: args.currentViewedMonth,
			currentViewedMonthIdx: args.currentViewedMonthIdx,
			currentMonthName: args.currentMonthName,
		};
	},
	[at.SET_REMINDER]: (state, args) => {
		return {
			...state,
			reminders: {
				...state.reminders,
				[args.reminderKey]: args.reminder,
			},
		};
	},
};
