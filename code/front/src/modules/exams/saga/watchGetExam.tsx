import { put, takeEvery } from 'redux-saga/effects'
import { GET_EXAM, setExam } from '../../../ducks/index';
const axios = require('axios').default;

export function* getExamSaga(action) {
  const url = "http://localhost:4000/exams-information/".concat(action.id)
  try {
    const response = yield axios.get(url)
    yield put(setExam(response.data))
  } catch {
    console.log("entre al catch!!")
    //Debería hacer una página de error o algo así, pero no está en el diseño
  }
}

export function* watchGetExam() {
  yield takeEvery(GET_EXAM, getExamSaga)
}