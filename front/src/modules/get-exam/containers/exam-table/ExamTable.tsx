import React from "react"
import { Exam } from "../../ducks";
import GetExam from "../GetExam"
import { ExamName, Row, ExamButton, ExamContainer, NoExam } from './ExamTableStyles';
import { initState } from '../../ducks/index';

type ExamTableProps = {
    exams: [Exam],
}

const ExamTable: React.FunctionComponent<ExamTableProps> = ({ exams }) => {
    const examsExist = JSON.stringify(exams) != JSON.stringify(initState.exams)
    return (
        <React.Fragment>
            <Row style={{
                'borderTop': '1px solid #f0f0f0',
                'borderBottom': '1px solid #d5d5d5',
                'fontSize': '13px'
            }}>
                <ExamContainer>
                    <ExamName>Examen</ExamName>
                    <ExamButton>Acción</ExamButton>
                </ExamContainer>
            </Row>
            {examsExist &&
                exams.map(function (item, i) {
                    return (
                        <Row index={i} key={i}>
                            <ExamContainer>
                                <ExamName>{item.name}</ExamName>
                                <ExamButton><GetExam id={item.id} /></ExamButton>
                            </ExamContainer>
                        </Row>
                    );
                })
            }
            {!examsExist && <NoExam>¡Felicidades! No tienes exámenes pendientes</NoExam>}
        </React.Fragment >
    )
}

export default ExamTable
