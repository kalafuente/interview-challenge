import React, { useEffect } from 'react';
import { connect, useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
import ExamData from './exam-data/ExamData';
import Footer from './Footer/Footer';
import { SelectedExam } from '../../get-exam/ducks/index';
import { ExamContainer } from './ExamStyles';

type ExamProps = {
}

const Exam: React.FunctionComponent<ExamProps> = ({ }) => {
    const exam: SelectedExam = useSelector((state) => state.exams.selectedExam);
    console.log(exam)
    return (
        <React.Fragment>
            <ExamContainer>
                <ExamData title={exam.title} description={exam.description}
                    questions={exam.questions}
                />
                <Footer />
            </ExamContainer>
        </React.Fragment>)
}

export default connect()(Exam)
