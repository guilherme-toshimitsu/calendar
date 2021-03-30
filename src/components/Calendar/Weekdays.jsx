import React, {useEffect, useState, useLayoutEffect} from 'react';
import PropTypes from 'prop-types';
import {WeekdaysDiv} from './styles';

import {useCalendar} from './';

const Weekdays = () => {
	const [{weekdays}] = useCalendar();
	return (
		<tr>
			{weekdays.map((weekday, idx) => (
				<th key={`weekday-${idx}`}>
					<WeekdaysDiv key={`weekday-${weekday}`}>
						{weekday}
					</WeekdaysDiv>
				</th>
			))}
		</tr>
	);
};

export default Weekdays;
