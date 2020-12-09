import React from 'react';
import configureStore from '../store';
import { Provider } from 'react-redux'
import { ThemeProvider } from 'styled-components'
import theme from '../components/theme/Theme';
import withRedux from 'next-redux-wrapper/lib'
import './index.css';
import { getExams } from '../ducks';
import withReduxSaga from 'next-redux-saga'


function App({ Component, pageProps, store }) {
    return <Provider store={store}>
        <ThemeProvider theme={theme}>
            <Component {...pageProps} />
        </ThemeProvider>
    </Provider>
}

App.getInitialProps = async (context): Promise<any> => {
    const store = context.ctx.store;
    store.dispatch(getExams());
    return { store };
}

export default withRedux(configureStore)(withReduxSaga(App))