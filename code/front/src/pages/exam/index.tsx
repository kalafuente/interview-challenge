import React from 'react';
import { connect, useSelector } from 'react-redux'
import ExamData from '../../modules/exam/Exam';
import Footer from '../../modules/exam/footer/Footer';
import { initState, SelectedExam } from '../../ducks';
import { StateType } from '../../ducks/index';
import Result from '../../modules/exam/result/Result';

const ExamPage: React.FunctionComponent<{}> = ({ }) => {
    const exam: SelectedExam = useSelector((state: StateType) => state.exams.selectedExam);
    const examExist = JSON.stringify(exam) != JSON.stringify(initState.selectedExam)
    return <React.Fragment>
        {
            examExist && !exam.result &&
            <React.Fragment>
                <ExamData title={exam.title} description={exam.description}
                    questions={exam.questions} id={exam.id}
                />
                <Footer />
            </React.Fragment>
        }
        {
            examExist && exam.result && <Result result={exam.result} />
        }
        {
            !examExist && <div>Ha ocurrido un error</div>
        }
    </React.Fragment>
}

export default connect()(ExamPage)
