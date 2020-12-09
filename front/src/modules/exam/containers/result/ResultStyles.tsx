import styled from 'styled-components'

export const ResultContainer = styled('div') <{}>`
    margin-top: 45px;
    text-align: center;
    @media ${props => props.theme.device.xs.min}{
        margin-left: 30px;
        margin-right: 30px;
    }
    @media ${props => props.theme.device.sm.min}{
        margin-left: 60px;
        margin-right: 60px;
    }
    @media ${props => props.theme.device.lg.min}{
        margin-left: 191px;
        margin-right: 191px;
      }
    @media ${props => props.theme.device.xl.min}{
        margin-left: 353px;
        margin-right: 353px;
    }
`;

export const ButtonContainer = styled('div') <{}>`
    margin-top: 30px;
`;

