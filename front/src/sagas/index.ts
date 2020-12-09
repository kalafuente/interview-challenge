import { all } from 'redux-saga/effects'
import { watchGetExam } from '../modules/get-exam/saga/watchGetExam';
import { watchSetExam } from '../modules/get-exam/saga/watchSetExam';
import { watchGetExams } from '../modules/get-exam/saga/watchGetExams';
import { watchSendExam } from '../modules/exam/saga/watchSendExam';
import { watchGoToHome } from '../modules/exam/saga/watchGoToHome';

const sagasModules = [
  watchGetExam(),
  watchSetExam(),
  watchGetExams(),
  watchSendExam(),
  watchGoToHome(),
]

export default function* rootSaga() {
  yield all([
    ...sagasModules,
  ])
}