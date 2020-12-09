import React from "react"
import { useSelector } from "react-redux";
import { Title } from "../components/titles/Title"
import ExamTable from "../modules/get-exam/containers/exam-table/ExamTable"
import { StateType } from "../ducks";

const ListOfExamsPage: React.FunctionComponent<{}> = ({ }) => {
    const state = useSelector((state: StateType) => state);
    return <div>
        <Title title='Listado de examenes pendientes' />
        <ExamTable exams={state.exams.exams} />
    </div>
}
export default ListOfExamsPage



