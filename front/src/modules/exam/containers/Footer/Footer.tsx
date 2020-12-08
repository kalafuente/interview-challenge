import React, { } from 'react';
import { Icon, Background, FooterContainer } from './FooterStyles';

const Footer: React.FunctionComponent<{}> = ({ }) => {

    return (
        <React.Fragment>
            <FooterContainer>
                <Icon src="/icono.png" alt="" />
                <Background src="/fondo.svg" alt="" />
            </FooterContainer>
        </React.Fragment>)
}

export default Footer
