import React from 'react';
import { connect, useSelector } from 'react-redux'
import Exam from '../../modules/exam/Exam';
import Footer from '../../modules/exam/footer/Footer';
import { initState } from '../../ducks';
import Result from '../../modules/exam/result/Result';
import { SelectedExam, StateType } from '../../models/Exam';

const ExamPage: React.FunctionComponent<{}> = ({ }) => {
    const exam: SelectedExam = useSelector((state: StateType) => state.exams.selectedExam);
    const examExist = JSON.stringify(exam) != JSON.stringify(initState.selectedExam)
    return <React.Fragment>
        {
            examExist && !exam.result &&
            <React.Fragment>
                <Exam title={exam.title} description={exam.description}
                    questions={exam.questions} id={exam.id}
                />
                <Footer />
            </React.Fragment>
        }
        {
            examExist && exam.result && <Result result={exam.result} />
        }
        {
            !examExist && <div>No hay examen cargado</div>
        }
    </React.Fragment>
}

export default connect()(ExamPage)
