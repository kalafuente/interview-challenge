import React from "react"
import GetExam from "../GetExam"
import { ExamName, Row, ExamButton, ExamContainer, NoExam } from './ExamTableStyles';
import Router from 'next/router';

type ExamTableProps = {
    list: { name: string, id: string }[],
}

const ExamTable: React.FunctionComponent<ExamTableProps> = ({ list }) => {
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

            {!!list.length &&
                list.map(function (item, i) {
                    return (
                        <Row index={i} key={i}>
                            <ExamContainer>
                                <ExamName>{item.name}</ExamName>
                                <ExamButton onClick={() => Router.push('/exam')}><GetExam id={item.id} /></ExamButton>
                            </ExamContainer>
                        </Row>
                    );
                })
            }

            {!!!list.length && <NoExam>¡Felicidades! No tienes exámenes pendientes</NoExam>}
        </React.Fragment >
    )
}

export default ExamTable
