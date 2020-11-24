import React from 'react';
import { ButtonStyled } from './ButtonStyles';

export enum ButtonTypes {
    PRIMARY = 'primary',
    SECONDARY = 'secondary',
}

type ButtonProps = {
    text: string;
    styleType: ButtonTypes;
    type?: string,
    onClick?: () => void;
}

export class Button extends React.PureComponent<ButtonProps>  {
    render() {
        const { text, styleType, onClick } = this.props
        return (
            <React.Fragment>
                <ButtonStyled styleType={styleType} onClick={onClick}>
                    {text}
                </ButtonStyled>
            </React.Fragment>
        );
    }
}