import React, { useState } from "react";
import { useForm, SubmitHandler, Controller } from "react-hook-form";
import { Question } from '../../../../get-exam/ducks/index';
import ButtonsResult from "./ButtonResult";

import {
    RadioGroup,
    FormControlLabel,
    Radio,

} from "@material-ui/core";

type Inputs = {
    example: string;
    exampleRequired: string;
};

type ExamFormsProps = {
    questions: [Question]
}

enum QuestionType {
    TRUEORFALSE = 'trueOrFalse',
    MULTIPLECHOISE = 'multipleChoise',
    FREE = 'free',
}


const getInputByType = (question: Question, register, id, control) => {
    switch (question.type) {

        case QuestionType.TRUEORFALSE:
            // code block
            break;
        case QuestionType.MULTIPLECHOISE:
            return <section>
                <Controller
                    as={
                        <RadioGroup aria-label={id}>
                            {
                                question.options?.map(function (item, i) {
                                    return (
                                        <FormControlLabel
                                            value={item}
                                            control={<Radio />}
                                            label={item}
                                        />
                                    );
                                })
                            }
                        </RadioGroup>
                    }
                    name="RadioGroup"
                    control={control}
                />
            </section>
            break;
        default:
            return <section>
                <input name={id} className="input" ref={register} />
            </section>
        // tipo: free
    }
}
const defaultValues = {

};

const ExamForm: React.FunctionComponent<ExamFormsProps> = ({ questions }) => {
    console.log(questions);
    const { handleSubmit, register, reset, control } = useForm({ defaultValues });
    const onSubmit: SubmitHandler<Inputs> = data => {
        alert(JSON.stringify(data));
    }; // your form submit function which will invoke after successful validation

    const [data, setData] = useState(null);

    return (
        <form onSubmit={handleSubmit(data => setData(data))} className="form">
            {
                questions.map(function (item, i) {
                    return (
                        <div key={i}>
                            <div>{i}</div>
                            <div>{item.question}</div>
                            {getInputByType(item, register, i, control)}
                        </div>
                    );
                })
            }

            <ButtonsResult {...{ data, reset, defaultValues }} />
        </form>


    );
}

export default ExamForm
