import { createEmitAndSemanticDiagnosticsBuilderProgram } from "typescript"
import { ActionCreator } from "../../../models/ActionCreator"

//actions
export const GET_EXAMS: string = 'GET_EXAMS'
export const GET_EXAM: string = 'GET_EXAM'
export const SET_EXAM: string = 'SET_EXAM'
export const SET_EXAMS: string = 'SET_EXAMS'

export type Exam = {
    name: string, id: string
}
export type examsEstate = {
    exams: [Exam] | null;
    selectedExam: {
        id: string | number;
        description: string,
        questions: []
    } | null;
}

const initState: examsEstate = {
    exams: null,
    selectedExam: null,
}

//reducer
export function exams(state: examsEstate = initState, action: ActionCreator): examsEstate {
    switch (action.type) {
        case 'SET_EXAM':
            return {
                ...state,
                exams: state.exams,
                selectedExam: {
                    id: action.id,
                    description: action.description,
                    questions: action.questions,
                }
            }
        case 'SET_EXAMS':
            return {
                ...state,
                exams: action.exams,
                selectedExam: state.selectedExam
            }
        default:
            return state
    }
}

// action creators
export const setExam = (id: string, exam: { description: string, questions: [] }) => ({
    type: SET_EXAM,
    id: id,
    description: exam.description,
    questions: exam.questions,
})

export const setExams = (exams: [Exam]) => ({
    type: SET_EXAMS,
    exams: exams
})

export const getExam = (id: string | number) => ({
    type: GET_EXAM,
    id: id,
})
export const getExams = () => ({
    type: GET_EXAMS,
})