import React from 'react';
import { connect, useDispatch } from 'react-redux'
import Exam from "../../modules/exam/containers/Exam"

const ExamPage: React.FunctionComponent<{}> = ({ }) => {
    return <React.Fragment>
        <Exam />
    </React.Fragment>
}

export default connect()(ExamPage)
