import React, { useEffect } from 'react';
import { connect, useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
import { examsEstate } from '../../get-exam/ducks';

type ExamProps = {
}

const Exam: React.FunctionComponent<ExamProps> = ({ }) => {
    const exam = useSelector((state) => state);
    useEffect(() => {
        console.log("en el cliente", exam)
    }, [exam]);

    return (
        <React.Fragment>
            holis
        </React.Fragment>)
}

export default connect()(Exam)
