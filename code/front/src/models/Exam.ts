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

export type StateType = {
    exams: ExamsEstate;
}