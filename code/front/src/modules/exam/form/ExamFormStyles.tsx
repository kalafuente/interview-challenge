import styled from "styled-components";

export const IconButtonContainer = styled('div') <{}>`
    margin-top: 60px;
    display:flex;
    position: absolute;
    width: 100%;
    justify-content: space-between;
`;

export const ButtonContainer = styled('div') <{}>`
    height: 44px;
    z-index: 1;
    @media ${props => props.theme.device.xl.min}{
       min-width:158px;
    }
`;

export const Icon = styled('img') <{}>`
    display: inline-block;
    z-index: 1;
    @media ${props => props.theme.device.xs.min}{
        width: 130px;
        height: 161px;
    }
    @media ${props => props.theme.device.sm.min}{
        width: 210px;
        height: 260px;
    }
    @media ${props => props.theme.device.lg.min}{
        width: 370px;
        height: 458px;
    }
    @media ${props => props.theme.device.xl.min}{
        width: 457px;
        height: 566px
    }
`;

export const QuestionContainer = styled('div') <{}>`
    margin-bottom: 45px;
    @media ${props => props.theme.device.xl.min}{
        margin-bottom: 60px;
    }
`;
