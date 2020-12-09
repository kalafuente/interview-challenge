import { ActionCreator } from "../models/ActionCreator"

//actions
export const GET_EXAMS: string = 'GET_EXAMS'
export const GET_EXAM: string = 'GET_EXAM'
export const SET_EXAM: string = 'SET_EXAM'
export const SET_EXAMS: string = 'SET_EXAMS'
export const SET_RESULT: string = 'SET_RESULT'
export const SEND_EXAM: string = 'SEND_EXAM'
export const GO_TO_HOME: string = 'GO_TO_HOME'
export const CLEAR_EXAM: string = 'CLEAR_EXAM'


export type Exam = {
    name: string, id: string
}
export type SelectedExam = {
    id: string;
    title: string;
    description: string,
    questions: [Question],
    result?: string
}

export type Question = {
    id: string;
    type: string,
    question: string;
    options?: [String]
}
export type QuestionResponse = {
    id: string,
    response: string
}

export type ResolvedExam = {
    examId: string;
    questions: [QuestionResponse]
}

export type ExamsEstate = {
    exams: [Exam];
    selectedExam: SelectedExam
}

const initExam = {
    name: "",
    id: "",
}

const initSelectedExam: SelectedExam = {
    id: "",
    title: "",
    description: "",
    questions: [{ id: "", type: "", question: "" }]
}

export const initState: ExamsEstate = {
    exams: [initExam],
    selectedExam: initSelectedExam,
}

export type StateType = {
    exams: ExamsEstate;
}

//reducer
export function exams(state: ExamsEstate = initState, action: ActionCreator): ExamsEstate {
    switch (action.type) {
        case SET_EXAM:
            return {
                ...state,
                exams: state.exams,
                selectedExam: {
                    id: action.id,
                    title: action.title,
                    description: action.description,
                    questions: action.questions,
                }
            }
        case SET_EXAMS:
            return {
                ...state,
                exams: action.exams,
                selectedExam: state.selectedExam
            }
        case SET_RESULT:
            return {
                ...state,
                selectedExam: {
                    ...state.selectedExam,
                    result: action.result
                }
            }
        case CLEAR_EXAM:
            return {
                ...state,
                selectedExam: initSelectedExam
            }
        default:
            return state
    }
}

// action creators
export const setExam = (exam: SelectedExam) => ({
    type: SET_EXAM,
    id: exam.id,
    title: exam.title,
    description: exam.description,
    questions: exam.questions,
})

export const setExams = (exams: [Exam]) => ({
    type: SET_EXAMS,
    exams: exams
})

export const getExam = (id: string) => ({
    type: GET_EXAM,
    id: id,
})
export const getExams = () => ({
    type: GET_EXAMS,
})

export const sendExam = (resolvedExam: ResolvedExam) => ({
    type: SEND_EXAM,
    examResolved: resolvedExam
})

export const setResult = (result: string) => ({
    type: SET_RESULT,
    result: result,
})

export const goToHome = () => ({
    type: GO_TO_HOME,
})

export const clearExamSelected = () => ({
    type: CLEAR_EXAM,
})