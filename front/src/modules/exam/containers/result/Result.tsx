import React, { } from 'react';
import { Button } from '../../../../components/button/Button';
import { ButtonTypes, Title } from '../../../../components/titles/Title';
import { ButtonContainer, ResultContainer } from './ResultStyles';
import { useDispatch } from "react-redux";
import { goToHome } from '../../../../ducks/index';

type ResultProps = {
    result: string
};

const Result: React.FunctionComponent<ResultProps> = ({ result }) => {
    const dispatch = useDispatch()
    const text: string = "El resultado de la evaluación es de ".concat(result).concat(" puntos")
    return (
        <React.Fragment>
            <ResultContainer>
                <Title title={text} subtitle="Muchas gracias por completar esta evaluación." />
                <ButtonContainer>
                    <Button type='submit' text="Volver al listado" styleType={ButtonTypes.PRIMARY}
                        onClick={() => dispatch(goToHome())} />
                </ButtonContainer>
            </ResultContainer>
        </React.Fragment>)
}

export default Result
