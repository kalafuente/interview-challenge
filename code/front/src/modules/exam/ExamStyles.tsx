import styled from 'styled-components'

export const TitleContainer = styled('div') <{}>`
    position:relative;
    @media ${props => props.theme.device.xs.min}{
        margin: 45px 30px 45px 30px;
    }
    @media ${props => props.theme.device.sm.min}{
        margin-top: 45px;
        margin-left: auto;
        margin-right: auto;  
        max-width: 570px;

    }
    @media ${props => props.theme.device.lg.min}{
        margin-top: 45px;
        margin-left: auto;
        margin-right: auto;  
        max-width: 610px;

    }
    @media ${props => props.theme.device.xl.min}{
        margin-top: 45px;
        margin-left: auto;
        margin-right: auto;  
        max-width: 749px;
    }
`;
