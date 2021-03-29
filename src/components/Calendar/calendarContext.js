import {createContext} from 'react';

const CalendarContext = createContext({});

const CalendarContextProvider = CalendarContext.Provider;
const CalendarContextConsumer = CalendarContext.Consumer;

export {CalendarContextConsumer, CalendarContextProvider, CalendarContext};
