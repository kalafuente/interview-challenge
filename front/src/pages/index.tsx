import React, { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux";
import { Title } from "../components/titles/Title"
import ExamTable from "../modules/get-exam/containers/exam-table/ExamTable"
import { getExams } from '../modules/get-exam/ducks/index';

const InterviewChallengeApp: React.FunctionComponent<{}> = ({ }) => {
    const state = useSelector((state) => state);
    return <div>
        <Title title='Listado de examenes pendientes' />
        <ExamTable list={state.exams.exams} />
    </div>
}


export default InterviewChallengeApp



