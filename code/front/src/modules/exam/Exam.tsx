import React from 'react';
import Title from '../../components/titles/Title';
import { ExamContainer } from './ExamStyles';
import ExamForm from './form/ExamForm';
import { SelectedExam } from '../../models/Exam';

type ExamProps = SelectedExam;

const Exam: React.FunctionComponent<ExamProps> = ({ title, description, questions, id }) => {
    //debería chequear si hay error y mostrarle otra cosa {error&&<ComponenteDeError/>}
    //o si no otra estrategia es que nunca llegue a esta página si no se pudo obtener examen, podría mostrarse algo en la home
    return (
        <ExamContainer>
            <Title title={title} subtitle={description} />
            <ExamForm questions={questions} id={id} />
        </ExamContainer>
    )
}

export default Exam
