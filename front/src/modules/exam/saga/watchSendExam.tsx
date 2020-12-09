import { put, takeEvery } from 'redux-saga/effects'
import { SEND_EXAM, setResult } from '../../../ducks/index';
const axios = require('axios').default;

export function* sendExamSaga(action) {
    console.log("le debería mandar esto al server", action.examResolved);
    //Pero voy a hacerlo más rapido aproposito, con un resultado hardcodeado
    const url = "http://localhost:4000/get-result/"
    try {
        const response = yield axios.get(url);
        yield put(setResult(response.data.result as string))
    } catch {
        console.log("entre al catch!!")
        //Debería hacer una página de error o algo así, pero no está en el diseño
    }
}

export function* watchSendExam() {
    yield takeEvery(SEND_EXAM, sendExamSaga)
}