import styled from "styled-components";
import { PALETTE_COLOR_SIZE } from "../../../../store/colors/types";

interface Props {
    color: string;
    selected: boolean;
}

export const ColorSwatchColorStyle = styled.div.attrs<Props>(props => ({
    style: {
        backgroundColor: props.color,
        borderColor: props.selected ? 'rgba(255,255,255,.7)' : 'transparent',
    },
}))<Props>`
    border-width: 3px;
    border-style: solid;
    box-sizing: border-box;
    width: ${PALETTE_COLOR_SIZE}px;
    height: ${PALETTE_COLOR_SIZE}px;
`