import {createMuiTheme, responsiveFontSizes} from '@material-ui/core/styles';

const theme = createMuiTheme({
    palette: {
        primary: {
            main: '#eee',
            light: '#eee',
            contrastText: '#444'
        }
    }
});

const responsiveTheme = responsiveFontSizes(theme);
export default responsiveTheme