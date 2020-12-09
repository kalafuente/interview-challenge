import React from 'react';
import { connect, useDispatch } from 'react-redux'
import Button, { ButtonTypes } from '../../../../components/button/Button';
import { getExam } from '../../../../ducks/index';

type GetExamProps = {
    id: string;
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
