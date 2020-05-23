import styled from "styled-components";
import { PALETTE_COLOR_SIZE } from "../../store/colors/types";

interface Props {
    count: number;
}

export const ColorSwatchStyle = styled.div<Props>`
    display: flex;
    align-items: center;
    flex-direction: row;
    flex-wrap: wrap;
    align-content: flex-end;
    margin-left: auto;
    max-width: ${props => PALETTE_COLOR_SIZE * Math.round(props.count / 2)}px;
`;