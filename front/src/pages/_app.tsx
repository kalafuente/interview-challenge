import React from 'react';
import configureStore from '../store';
import { Provider } from 'react-redux'
import { ThemeProvider } from 'styled-components'
import theme from '../components/theme/Theme';
import withRedux from 'next-redux-wrapper/lib'
import './index.css';


function App({ Component, pageProps }) {
    return <Provider store={configureStore()}>
        <ThemeProvider theme={theme}>
            <Component {...pageProps} />
        </ThemeProvider>
    </Provider>
}

export default withRedux(configureStore)(App)