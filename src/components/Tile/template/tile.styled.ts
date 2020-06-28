import styled from "styled-components";

interface Props {
    color?: string;
    row?: number;
    column?: number;
    size: number;
}

export const TileStyled = styled.div.attrs<Props>(props => ({
    style: {
        width: `${props.size}px`,
        height: `${props.size}px`,
        top: `${props.row && props.size * props.row}px`,
        left: `${props.column && props.size * props.column}px`,
        backgroundColor: props.color,
    }
}))<Props>`
    position: ${props => props.row == null ? 'relative' : 'absolute'};
    &:before {
        content: '';
        position: absolute;
        width: 60%;
        height: 60%;
        top: 20%;
        left: 20%;
        background-color: black;
        opacity: 0.1;
    }
`;