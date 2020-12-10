import React from 'react';
import configureStore from '../store';
import { Provider } from 'react-redux'
import { ThemeProvider } from 'styled-components'
import theme from '../components/theme/Theme';
import withRedux from 'next-redux-wrapper/lib'
import './index.css';
import { getExams, setExams } from '../ducks';
import withReduxSaga from 'next-redux-saga'
const axios = require('axios').default;


function App({ Component, pageProps, store }) {
    return <Provider store={store}>
        <ThemeProvider theme={theme}>
            <Component {...pageProps} />
        </ThemeProvider>
    </Provider>
}

App.getInitialProps = async (context): Promise<any> => {
    const store = context.ctx.store;
    const url = "http://localhost:4000/exams"
    const response = axios.get(url)
    await response.then(
        function (apiResponse) {
            store.dispatch(setExams(apiResponse.data.exams));
        }
    )
    return { store };
}

export default withRedux(configureStore)(withReduxSaga(App))