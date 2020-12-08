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
export type SelectedExam = {
    id: string | number;
    title: string;
    description: string,
    questions: [Question]
}

export type Question = {
    id: string | number;
    type: string,
    question: string;
    options?: [String]
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
        case 'SET_EXAM':
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
export const setExam = (id: string, exam: { title: string, description: string, questions: [] }) => ({
    type: SET_EXAM,
    id: id,
    title: exam.title,
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