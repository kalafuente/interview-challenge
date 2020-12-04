import React from 'react';
import { connect, useDispatch } from 'react-redux'

type ExamProps = {
}

const Exam: React.FunctionComponent<ExamProps> = ({ }) => {
    const dispatch = useDispatch()
    return <div>
        <img src="/fondo.svg" alt="" />
        <img src="/logo.png" alt="" />

    </div>

}

export default connect()(Exam)
