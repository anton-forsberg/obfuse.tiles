import styled from "styled-components";
import { deviceQueries } from "../../../../utils/theme.utils";

export const PALETTE_COLUMNS = 2;

export const PALETTE_WIDTH = 20;
export const PALETTE_HEIGHT = PALETTE_WIDTH * PALETTE_COLUMNS;

export const PALETTE_WIDTH_MOBILE = 30;
export const PALETTE_HEIGHT_MOBILE = PALETTE_WIDTH_MOBILE * PALETTE_COLUMNS;

interface Props {
    selected: boolean;
}

export const PaletteStyle = styled.div<Props>`
    height: ${PALETTE_HEIGHT}px;
    width: ${PALETTE_WIDTH}px;
    display: flex;
    flex-flow: column wrap;
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

    ${deviceQueries.mobile} {
        height: ${PALETTE_HEIGHT_MOBILE}px;
        width: ${PALETTE_WIDTH_MOBILE}px;
    }
`;