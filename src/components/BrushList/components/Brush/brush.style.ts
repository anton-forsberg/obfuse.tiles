import styled from "styled-components";

export const BRUSH_TILE_SIZE = 5;
export const BRUSH_TILE_PADDING = 15;

interface Props {
    columns: number;
    rows: number;
}

export const BrushStyle = styled.div.attrs<Props>(props => ({
    style: {
        width: `${props.columns * BRUSH_TILE_SIZE + BRUSH_TILE_PADDING}px`,
        height: `${props.rows * BRUSH_TILE_SIZE + BRUSH_TILE_PADDING}px`,
    }
}))<Props>`
    position: relative;
    cursor: pointer;
    display: flex;
    align-items: center;
`;