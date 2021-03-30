import {createMuiTheme} from '@material-ui/core/styles';

const theme = createMuiTheme({
	palette: {
		primary: {main: '#3498db'},
	},
	overrides: {
		MuiOutlinedInput: {
			root: {
				'&:hover:not($disabled):not($focused):not($error) $notchedOutline': {
					borderColor: '#3498db',
				},
			},
		},
	},
	mainStyle: {
		mainBackgroundColor: '#F2F1F6',
		mainThemeColor: '#6547DD',
	},
});

export default theme;
