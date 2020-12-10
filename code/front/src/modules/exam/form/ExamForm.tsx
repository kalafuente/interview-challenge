import React, { useState } from "react";
import { useForm } from "react-hook-form";
import MultipleChoise from '../../../components/form/multiple-choice/MultipleChoise';
import TrueOrFalse from '../../../components/form/true-or-false/TrueOrFalse';
import Input from "../../../components/form/input/Input";
import { ButtonContainer, Icon, IconButtonContainer, QuestionContainer } from "./ExamFormStyles";
import QuestionTitle from '../../../components/form/question-title/QuestionTitle';
import { Question, QuestionResponse } from "../../../models/Exam";
import { useDispatch } from "react-redux";
import { sendExam } from "../../../ducks";
import Button, { ButtonTypes } from "../../../components/button/Button";

type ExamFormsProps = {
    questions: [Question],
    id: string;
}

enum QuestionType {
    TRUEORFALSE = 'trueOrFalse',
    MULTIPLECHOISE = 'multipleChoise',
    FREE = 'free',
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
    const examsLength: number = questions.length
    const dispatch = useDispatch();
    return (
        <form onSubmit={handleSubmit(data => {
            setData(data);
            dispatch(sendExam(
                {
                    examId: id,
                    questions: getQuestionsFormated(data)
                }
            ))
        })} className="form" >
            {
                questions.map(function (item, i) {
                    return (
                        <QuestionContainer key={i}>
                            <QuestionTitle total={examsLength} numeration={i + 1} question={item.question} />
                            {getInputByType(item, register, control)}
                        </QuestionContainer>
                    );
                })
            }
            < IconButtonContainer >
                <Icon src="/icono.png" alt="" />
                <ButtonContainer>
                    <Button type='submit' text="Finalizar" styleType={ButtonTypes.PRIMARY} />
                </ButtonContainer>
            </IconButtonContainer >
        </form >
    );
}

export default ExamForm
