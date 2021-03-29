import React, {useEffect, useState, useLayoutEffect} from 'react';
import PropTypes from 'prop-types';

const CalendarDay = ({day, idx}) => {
	return <td key={`day-${day}-${idx}`}>{day}</td>;
};

CalendarDay.propTypes = {
	day: PropTypes.number,
	idx: PropTypes.number,
};

export default CalendarDay;
