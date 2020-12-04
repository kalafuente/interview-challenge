import React from "react"
import { Title } from "../components/titles/Title"
import ExamTable from "../modules/get-exam/containers/exam-table/ExamTable"

function InterviewChallengeApp() {
    var list: { name: string, id: string }[] = [
        {
            name: 'Examen de religion -  Orígenes del mito universal',
            id: '1'
        },

        {
            name: 'Examen de matematicas - Ecuaciones logarítmicas',
            id: '2'
        },

        {
            name: 'Examen de religion',
            id: '3'
        },
    ]
    return <div>
        <Title title='Listado de examenes pendientes' />
        <ExamTable list={list} />
    </div>
}

export default InterviewChallengeApp