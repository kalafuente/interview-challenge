import styled from 'styled-components'


export const TitleContainer = styled('div') <{}>`
    @media ${props => props.theme.device.xs.min}{
        margin: 0 30px 45px 30px;
    }
    @media ${props => props.theme.device.sm.min}{
        margin: 0 45px 45px 45px;
    }
    @media ${props => props.theme.device.lg.min}{
        margin: 0 191px 45px 191px;
    }
    @media ${props => props.theme.device.xl.min}{
        margin: 0 345px 60px 345px;
    }
`;
