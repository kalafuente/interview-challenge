import React from 'react';
import Title from '../../components/titles/Title';
import { ExamContainer } from './ExamStyles';
import ExamForm from './form/ExamForm';
import { SelectedExam } from '../../ducks/index';

type ExamProps = SelectedExam;

const Exam: React.FunctionComponent<ExamProps> = ({ title, description, questions, id }) => {
    return (
        <ExamContainer>
            <Title title={title} subtitle={description} />
            <ExamForm questions={questions} id={id} />
        </ExamContainer>
    )
}

export default Exam
