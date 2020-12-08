import { takeEvery } from 'redux-saga/effects'
import { SET_EXAM } from '../ducks/index';
import Router from 'next/router';

export function* setExamSaga(action) {
    console.log("entre a la saga de set")
    Router.push('/exam');
}

export function* watchSetExam() {
    yield takeEvery(SET_EXAM, setExamSaga)
}