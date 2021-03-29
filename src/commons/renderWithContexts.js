import React from 'react';
import ThemeProvider from '@components/ThemeProvider';
import Auth from '@components/Auth';

const renderWithTheme = (children) => {
	return render(<ThemeProvider>{children}</ThemeProvider>);
};

const renderWithThemeAndContext = (children) => {
	return render(
		<ThemeProvider>
			<Auth>{children}</Auth>
		</ThemeProvider>,
	);
};

export {renderWithTheme, renderWithThemeAndContext};
