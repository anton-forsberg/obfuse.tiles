import styled from "styled-components";

interface Props {
    selected: boolean;
}

export const PaletteStyle = styled.div<Props>`
    height: 40px;
    display: flex;
    flex-flow: column wrap;
    width: 20px;
    margin-left: 10px;
    position: relative;

    &:after {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        border: 2px solid transparent;
        box-sizing: border-box;
        border-color: ${props => props.selected && '#fff'}
    }
`;