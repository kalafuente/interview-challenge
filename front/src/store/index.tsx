import { createStore, applyMiddleware } from 'redux'
import { combineReducers } from 'redux'
import { exams } from '../modules/redux-example/get-exam/ducks'
import { composeWithDevTools } from 'redux-devtools-extension';

const middlewares: any[] = [];
export const store = createStore(
    combineReducers({
        exams,
    }),
    composeWithDevTools(
        applyMiddleware(...middlewares),
        // other store enhancers if any
    )
)

