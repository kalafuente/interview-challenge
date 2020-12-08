import React from 'react';
import { connect, useDispatch } from 'react-redux'
import Exam from "../../modules/exam/containers/Exam"

type ExamProps = {
}

const ExamPage: React.FunctionComponent<ExamProps> = ({ }) => {
    return <div>
        <Exam />
        <img src="/fondo.svg" alt="" />
        <img src="/logo.png" alt="" />

    </div>

}

export default connect()(ExamPage)
