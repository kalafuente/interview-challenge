import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Question } from '../../../../get-exam/ducks/index';
import ButtonsResult from "./ButtonResult";
import MultipleChoise from '../../../../../components/form/multiple-choice/MultipleChoise';
import TrueOrFalse from '../../../../../components/form/true-or-false/TrueOrFalse';
import Input from "../../../../../components/form/input/Input";

type ExamFormsProps = {
    questions: [Question]
}
enum QuestionType {
    TRUEORFALSE = 'trueOrFalse',
    MULTIPLECHOISE = 'multipleChoise',
    FREE = 'free',
}

const getInputByType = (question: Question, register, control) => {
    switch (question.type) {
        case QuestionType.TRUEORFALSE:
            return <TrueOrFalse control={control} question={question} />
        case QuestionType.MULTIPLECHOISE:
            return <MultipleChoise control={control} question={question} />
        default:
            return <Input register={register} question={question} />
    }
}

const ExamForm: React.FunctionComponent<ExamFormsProps> = ({ questions }) => {
    const { handleSubmit, register, control } = useForm({});
    const [data, setData] = useState(null);
    return (
        <form onSubmit={handleSubmit(data => setData(data))} className="form">
            {
                questions.map(function (item, i) {
                    return (
                        <div key={i}>
                            <div>{i}</div>
                            <div>{item.question}</div>
                            {getInputByType(item, register, control)}
                        </div>
                    );
                })
            }
            <ButtonsResult {...{ data }} />
        </form>
    );
}

export default ExamForm
