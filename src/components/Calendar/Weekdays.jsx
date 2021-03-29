import React, {useEffect, useState, useLayoutEffect} from 'react';
import PropTypes from 'prop-types';
import {WeekdaysDiv} from './styles';

const Weekdays = ({names}) => {
	return (
		<tr>
			{names.map((weekday, idx) => (
				<th key={`weekday-${idx}`}>
					<WeekdaysDiv key={`weekday-${weekday}`}>
						{weekday}
					</WeekdaysDiv>
				</th>
			))}
		</tr>
	);
};

Weekdays.propTypes = {
	names: PropTypes.array,
};

export default Weekdays;
