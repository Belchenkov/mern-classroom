import React from "react";
import { BrowserRouter } from 'react-router-dom';
import { hot } from 'react-hot-loader';
import { ThemeProvider } from '@material-ui/styles';

import MainRouter from './MainRouter';
import theme from "./theme";

const App = () => {
    React.useEffect(() => {
        const jssStyles = document.querySelector('#jss-server-side');
        if (jssStyles) {
            jssStyles.parentNode.removeChild(jssStyles);
        }
    }, []);

    return (
        <BrowserRouter>
            <ThemeProvider theme={theme}>
                <MainRouter />
            </ThemeProvider>
        </BrowserRouter>
    )
};

export default hot(module)(App);
