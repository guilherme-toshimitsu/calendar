import React from 'react';

import {useCalendar} from './';

const MonthPicker = () => {
	const [{currentMonthName}, {selectViewedMonth}] = useCalendar();

	return (
		<>
			<div>{currentMonthName}</div>
			<button onClick={() => selectViewedMonth(0)}>select january</button>
			<button onClick={() => selectViewedMonth()}>select today</button>
			<button onClick={() => selectViewedMonth(11)}>
				select december
			</button>
		</>
	);
};

export default MonthPicker;
