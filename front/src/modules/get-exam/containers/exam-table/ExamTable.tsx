import React from "react"
import GetExam from "../GetExam"
import { ExamName, Row, ExamButton, ExamContainer } from './ExamTableStyles';
import Router from 'next/router';

type ExamTableProps = {
}

const ExamTable: React.FunctionComponent<ExamTableProps> = ({ }) => {
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

            {
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
        </React.Fragment >
    )
}

export default ExamTable
