import styled from "styled-components";
import { PALETTE_WIDTH, PALETTE_COLUMNS, PALETTE_WIDTH_MOBILE } from "../../../template/palette.styled";
import { deviceQueries } from "../../../../../../../utils/theme.utils";

const PALETTE_COLOR_SIZE = PALETTE_WIDTH / PALETTE_COLUMNS;
const PALETTE_COLOR_SIZE_MOBILE = PALETTE_WIDTH_MOBILE / PALETTE_COLUMNS;

interface Props {
    color: string;
}

export const PaletteColorStyled = styled.div.attrs<Props>(props => ({
    style: {
        backgroundColor: props.color,
    }
}))`
    width: ${PALETTE_COLOR_SIZE}px;
    height: ${PALETTE_COLOR_SIZE}px;

    ${deviceQueries.mobile} {
        width: ${PALETTE_COLOR_SIZE_MOBILE}px;
        height: ${PALETTE_COLOR_SIZE_MOBILE}px;
    }
`;