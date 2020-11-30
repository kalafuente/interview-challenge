import { createStore, applyMiddleware } from 'redux'
import { combineReducers } from 'redux'
import { exams } from '../modules/get-exam/ducks'
import { composeWithDevTools } from 'redux-devtools-extension';
import { Store } from 'redux'

const middlewares: any[] = [];

function configureStore(initialState = {}): Store {
    const store = createStore(
        combineReducers({
            exams,
        }),
        composeWithDevTools(
            applyMiddleware(...middlewares),
            // other store enhancers if any
        )
    )
    return store
}
export default configureStore