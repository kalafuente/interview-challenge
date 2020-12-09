import { all } from 'redux-saga/effects'
import { watchGetExam } from '../modules/exams/saga/watchGetExam';
import { watchSetExam } from '../modules/exams/saga/watchSetExam';
import { watchGetExams } from '../modules/exams/saga/watchGetExams';
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