import { put, takeEvery } from 'redux-saga/effects'
import { clearExamSelected, GO_TO_HOME } from '../../../ducks/index';
import Router from 'next/router';

export function* goToHomeSaga(action) {
    yield put(clearExamSelected())
    Router.push('/');
}

export function* watchGoToHome() {
    yield takeEvery(GO_TO_HOME, goToHomeSaga)
}