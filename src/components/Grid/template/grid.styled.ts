import styled from "styled-components";
import { CONTROL_BACKGROUND_COLOR } from "../../../constants/styles.constants";

interface Props {
    tileSize: number;
    rows: number;
    columns: number;
}

export const GridStyled = styled.div<Props>`
    position: relative;
    background-color: ${CONTROL_BACKGROUND_COLOR};
    width: ${props => props.tileSize * props.columns}px;
    height: ${props => props.tileSize * props.rows}px;
`;