import styled from "styled-components";
import { PALETTE_COLOR_SIZE } from "../../../../store/palettes/types";

interface Props {
    count: number;
}

export const ColorSwatchStyle = styled.div<Props>`
    display: flex;
    align-items: center;
    flex-flow: row wrap;
    align-content: flex-end;
    margin-left: 20px;
    max-width: ${props => PALETTE_COLOR_SIZE * Math.round(props.count / 2)}px;
`;