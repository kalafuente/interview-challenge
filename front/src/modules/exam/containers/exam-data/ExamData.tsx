import React from 'react';
import { Title } from '../../../../components/titles/Title';
import { Question } from '../../../get-exam/ducks';
import { TitleContainer } from './ExamDataStyles';
import ExamForm from './form/ExamForm';

type ExamProps = {
    title: string,
    description: string,
    questions: [Question]
}

const ExamData: React.FunctionComponent<ExamProps> = ({ title, description, questions }) => {
    return (
        <TitleContainer>
            <Title title={title} subtitle={description} />
            <ExamForm questions={questions} />
        </TitleContainer>
    )
}

export default ExamData
