import React, { } from 'react';
import { Background, FooterContainer } from './FooterStyles';

const Footer: React.FunctionComponent<{}> = ({ }) => {
    return (
        <FooterContainer>
            <Background src="/fondo.svg" alt="" />
        </FooterContainer>
    )
}

export default Footer
