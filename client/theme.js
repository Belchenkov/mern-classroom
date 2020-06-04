import { createMuiTheme } from '@material-ui/core/styles';
import { pink } from '@material-ui/core/colors';

const theme = createMuiTheme({
    typography: {
        useNextVariants: true,
    },
    palette: {
        primary: {
            light: '#716d59',
            main: '#71843d',
            dark: '#71789e',
            contrastText: '#fff',
        },
        secondary: {
            light: '#d9e8e6',
            main: '#e0c6cf',
            dark: '#c9bdc3',
            contrastText: '#000',
        },
        openTitle: '#3f4771',
        protectedTitle: pink['400'],
        type: 'light'
    }
});

export default theme;
