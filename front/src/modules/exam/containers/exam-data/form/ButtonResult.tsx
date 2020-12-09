import React from "react";
import { useDispatch } from "react-redux";
import { Button, ButtonTypes } from "../../../../../components/button/Button";
import { QuestionResponse, sendExam } from "../../../../../ducks";

type FromDataProps = {
    data: any;
    examId: string
}

const getQuestionsFormated = (data: any): [QuestionResponse] => {
    const questions = []
    for (var key in data) {
        if (data.hasOwnProperty(key)) {
            questions.push({
                id: key as string,
                response: data[key] as string
            })
        }
    }
    return questions as unknown as [QuestionResponse];
}

const FormButton: React.FunctionComponent<FromDataProps> = ({ data, examId }) => {
    const dispatch = useDispatch()
    return (
        <Button type='submit' text="Responder" styleType={ButtonTypes.PRIMARY} onClick={() => dispatch(sendExam(
            {
                examId: examId,
                questions: getQuestionsFormated(data)
            }
        ))}>
        </Button>
    );
}

export default FormButton