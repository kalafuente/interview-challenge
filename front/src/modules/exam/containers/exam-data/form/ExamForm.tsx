import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Question } from '../../../../../ducks/index';
import MultipleChoise from '../../../../../components/form/multiple-choice/MultipleChoise';
import TrueOrFalse from '../../../../../components/form/true-or-false/TrueOrFalse';
import Input from "../../../../../components/form/input/Input";
import FormButton from './ButtonResult';

type ExamFormsProps = {
    questions: [Question],
    id: string;
}

enum QuestionType {
    TRUEORFALSE = 'trueOrFalse',
    MULTIPLECHOISE = 'multipleChoise',
    FREE = 'free',
}

const getInputByType = (question: Question, register: any, control: any) => {
    switch (question.type) {
        case QuestionType.TRUEORFALSE:
            return <TrueOrFalse control={control} question={question} />
        case QuestionType.MULTIPLECHOISE:
            return <MultipleChoise control={control} question={question} />
        default:
            return <Input register={register} question={question} />
    }
}
const ExamForm: React.FunctionComponent<ExamFormsProps> = ({ questions, id }) => {
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
            <FormButton data={data} examId={id} />
        </form>
    );
}

export default ExamForm
