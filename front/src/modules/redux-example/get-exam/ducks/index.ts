import { ActionCreator } from '../../../../models/ActionCreator';

//actions
export const GET_EXAM: string = 'GET_EXAM'

type examsEstate = {
    id: string | number | null;
}

const initState: examsEstate = {
    id: null
}

//reducer
export function exams(state: examsEstate = initState, action: ActionCreator): examsEstate {
    switch (action.type) {
        case 'GET_EXAM':
            return {
                id: action.id,
            }
        default:
            return state
    }
}

// action creators
export const getExam = (id: string | number) => ({
    type: GET_EXAM,
    id: id,
})
