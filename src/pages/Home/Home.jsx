import React from 'react';
import PropTypes from 'prop-types';

import Calendar from '@components/Calendar';

const Home = ({history}) => {
	return (
		<>
			<div>{'Home 2'}</div>
			<Calendar />
		</>
	);
};

Home.propTypes = {
	history: PropTypes.object,
};

export default Home;
