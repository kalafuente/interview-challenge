import { takeEvery } from 'redux-saga/effects'
import { GO_TO_HOME } from '../../../ducks/index';
import Router from 'next/router';

export function* goToHomeSaga(action) {
    Router.push('/');
}

export function* watchGoToHome() {
    yield takeEvery(GO_TO_HOME, goToHomeSaga)
}