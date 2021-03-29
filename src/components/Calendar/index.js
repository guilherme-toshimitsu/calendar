import {useContext} from 'react';
import {CalendarContext} from './calendarContext';

const useCalendar = () => useContext(CalendarContext);

export {default} from './Calendar';
export {useCalendar};
