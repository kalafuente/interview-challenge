import React from 'react';
import { connect, useDispatch } from 'react-redux'
import { getExam } from '../ducks/index';
import { Button, ButtonTypes } from '../../../../components/button/Button';

type GetExamProps = {
    id: string | number;
}

const GetExam: React.FunctionComponent<GetExamProps> = ({ id }) => {
    const dispatch = useDispatch()
    return (
        <Button type='submit' text="Responder" styleType={ButtonTypes.SECONDARY}
            onClick={() => dispatch(getExam(id))}>
        </Button>
    )
}

export default connect()(GetExam)
