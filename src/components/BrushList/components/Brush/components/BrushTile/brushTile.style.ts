import styled from "styled-components";
import { BRUSH_TILE_SIZE, BRUSH_TILE_PADDING } from "../../brush.style";
import { TOOLBAR_TEXT_COLOR } from "../../../../../../constants/styles.constants";

interface Props {
    column: number;
    row: number;
    color?: string;
    isSelected?: boolean;
}

export const BrushTileStyle = styled.div.attrs<Props>(props => ({
    style: {
        top: `${BRUSH_TILE_SIZE * props.row + BRUSH_TILE_PADDING / 2}px`,
        left: `${BRUSH_TILE_SIZE * props.column + BRUSH_TILE_PADDING / 2}px`,
    }
}))<Props>`
    position: absolute;
    width: ${BRUSH_TILE_SIZE}px;
    height: ${BRUSH_TILE_SIZE}px;
    background: ${props => props.isSelected ? 'rgb(255, 124, 67)' : props.color ?? TOOLBAR_TEXT_COLOR};
`;