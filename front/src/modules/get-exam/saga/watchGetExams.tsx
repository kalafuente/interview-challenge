import { put, takeEvery } from 'redux-saga/effects'
import { createSemicolonClassElement } from 'typescript';
import { GET_EXAMS, setExams } from '../../../ducks/index';
const axios = require('axios').default;

export function* getExamsSaga(action) {
    const url = "http://localhost:4000/exams"
    try {
        const response = yield axios.get(url)
        yield put(setExams(response.data.exams))
    } catch {
        console.log("entre al catch!!")
        //Debería hacer una página de error o algo así, pero no está en el diseño
    }
}

export function* watchGetExams() {
    yield takeEvery(GET_EXAMS, getExamsSaga)
}