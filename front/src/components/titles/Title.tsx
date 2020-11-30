import React from 'react';
import { ContainerStyled, TitleStyled } from './TitleStyles';

export enum ButtonTypes {
    PRIMARY = 'primary',
    SECONDARY = 'secondary',
}

type TitleProps = {
    title: string;
    subtitle?: string,
}

export class Title extends React.PureComponent<TitleProps>  {
    render() {
        const { title, subtitle } = this.props
        return (
            <React.Fragment>
                <ContainerStyled>
                    <TitleStyled>
                        {title}
                    </TitleStyled>
                </ContainerStyled>
            </React.Fragment>
        );
    }
}