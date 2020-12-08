import { createStore, applyMiddleware } from 'redux'
import { combineReducers } from 'redux'
import { exams } from '../modules/get-exam/ducks'
import { composeWithDevTools } from 'redux-devtools-extension';
import { Store } from 'redux'
import createSagaMiddleware from 'redux-saga'

const sagaMiddleware = createSagaMiddleware()
const middlewares: any[] = [sagaMiddleware];
import rootSaga from '../sagas'

function configureStore(initialState = {}): Store {
    const store = createStore(
        combineReducers({
            exams,
        }),
        initialState,
        composeWithDevTools(
            applyMiddleware(...middlewares),
        ),
    )

    store.sagaTask = sagaMiddleware.run(rootSaga)
    return store
}
export default configureStore