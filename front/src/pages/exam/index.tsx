import React from 'react';
import { connect, useSelector } from 'react-redux'
import ExamData from '../../modules/exam/containers/exam-data/ExamData';
import Footer from '../../modules/exam/containers/Footer/Footer';
import { initState, SelectedExam } from '../../modules/get-exam/ducks';
import { StateType } from '../../modules/get-exam/ducks/index';

const ExamPage: React.FunctionComponent<{}> = ({ }) => {
    const exam: SelectedExam = useSelector((state: StateType) => state.exams.selectedExam);
    const examExist = JSON.stringify(exam) != JSON.stringify(initState.selectedExam)

    return <React.Fragment>
        {
            examExist && <ExamData title={exam.title} description={exam.description}
                questions={exam.questions}
            />
        }
        {
            !examExist && <div>Ha ocurrido un error</div>
        }

        <Footer />
    </React.Fragment>
}

export default connect()(ExamPage)
