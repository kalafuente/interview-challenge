import React from "react"
import Title from "../../components/titles/Title";
import ExamTable from "./exam-table/ExamTable";
import { TitleContainer } from "./ExamsStyles";
import Exam from '../exam/Exam';

type ExamProps = {
    exams: [Exam]
};

const Exams: React.FunctionComponent<ExamProps> = ({ exams }) => {
    return (
        <React.Fragment>
            <TitleContainer>
                <Title title='Listado de examenes pendientes' />
            </TitleContainer>
            <ExamTable exams={exams} />
        </React.Fragment>
    )
}

export default Exams
