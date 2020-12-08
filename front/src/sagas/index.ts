import { all } from 'redux-saga/effects'
import { watchGetExam } from '../modules/get-exam/saga/watchGetExam';
import { watchSetExam } from '../modules/get-exam/saga/watchSetExam';
import { watchGetExams } from '../modules/get-exam/saga/watchGetExams';

const sagasModules = [
  watchGetExam(),
  watchSetExam(),
  watchGetExams(),
]

export default function* rootSaga() {
  yield all([
    ...sagasModules,
  ])
}