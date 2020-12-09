import React from 'react';
import Title from '../../../../components/titles/Title';
import { TitleContainer } from './ExamDataStyles';
import ExamForm from './form/ExamForm';
import { SelectedExam } from '../../../../ducks/index';

type ExamProps = SelectedExam;

const ExamData: React.FunctionComponent<ExamProps> = ({ title, description, questions, id }) => {
    return (
        <TitleContainer>
            <Title title={title} subtitle={description} />
            <ExamForm questions={questions} id={id} />
        </TitleContainer>
    )
}

export default ExamData
