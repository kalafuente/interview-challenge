import styled from 'styled-components'

export const Icon = styled('img') <{}>`
    display: inline-block;
    position: absolute;
    z-index: 1;
    @media ${props => props.theme.device.xs.min}{
        margin: 0 25px 39px 30px;
        width: 130px;
        height: 161px;
    }
    @media ${props => props.theme.device.sm.min}{
        margin: 60px 195px 115px 45px;
        width: 210px;
        height: 260px;
    }
    @media ${props => props.theme.device.lg.min}{
        margin: 60px 132px 334px 345px;
        width: 370px;
        height: 458px;
      }
    @media ${props => props.theme.device.xl.min}{
        margin: 60px 132px 334px 345px;
        width: 457px;
        height: 566px
    }
`;

export const Background = styled('img') <{}>`
    z-index: 0;
    width: 100%;
    margin-bottom: -10px;
`;

export const FooterContainer = styled('div') <{}>`
    position: relative;
    bottom: 0;
`;