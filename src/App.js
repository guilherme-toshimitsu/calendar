import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import ThemeProvider from '@material-ui/styles/ThemeProvider';

import Main from '@pages/Main';
import theme from '@commons/theme';

import {SnackWrapper} from '@components/SnackBar';
import {ModalWrapper} from '@components/Modal';

import AuthWrapper from '@components/Auth';

const App = () => {
	return (
		<ThemeProvider theme={theme}>
			<CssBaseline />
			<SnackWrapper>
				<ModalWrapper>
					<AuthWrapper>
						<Main />
					</AuthWrapper>
				</ModalWrapper>
			</SnackWrapper>
		</ThemeProvider>
	);
};

export default App;
