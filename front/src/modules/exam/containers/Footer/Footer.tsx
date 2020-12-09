import React, { } from 'react';
import { Background, FooterContainer, Icon } from './FooterStyles';

const Footer: React.FunctionComponent<{}> = ({ }) => {
    return (
        <FooterContainer>
            <Icon src="/icono.png" alt="" />
            <Background src="/fondo.svg" alt="" />
        </FooterContainer>
    )
}

export default Footer
