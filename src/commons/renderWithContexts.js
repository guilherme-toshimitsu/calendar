import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import ThemeProvider from '@material-ui/styles/ThemeProvider';
import theme from '@commons/theme';
import AuthWrapper from '@components/Auth';
import {SnackWrapper} from '@components/SnackBar';
import {ModalWrapper} from '@components/Modal';

const renderWithTheme = (children) => {
	return render(<ThemeProvider theme={theme}>{children}</ThemeProvider>);
};

const renderWithThemeAndContext = (children) => {
	return render(
		<ThemeProvider theme={theme}>
			<CssBaseline />
			<SnackWrapper>
				<ModalWrapper>
					<AuthWrapper>{children}</AuthWrapper>
				</ModalWrapper>
			</SnackWrapper>
		</ThemeProvider>,
	);
};

export {renderWithTheme, renderWithThemeAndContext};
