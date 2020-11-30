import React from "react"
import { Title } from "../components/titles/Title"
import ExamTable from "../modules/get-exam/containers/exam-table/ExamTable"

function InterviewChallengeApp() {
    return <div>
        <Title title='Listado de examenes pendientes' />
        <ExamTable />
    </div>
}

export default InterviewChallengeApp