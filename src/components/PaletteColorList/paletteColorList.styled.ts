import styled from "styled-components";
import { PALETTE_COLOR_SIZE, PALETTE_COLOR_SIZE_MOBILE } from "../../store/palettes/palettes.constants";
import { deviceQueries } from "../../utils/theme.utils";

interface Props {
    count: number;
}

export const PaletteColorListStyle = styled.div<Props>`
    display: flex;
    align-items: center;
    flex-flow: row wrap;
    align-content: flex-end;
    margin-left: 20px;
    max-width: ${props => PALETTE_COLOR_SIZE * Math.round(props.count / 2)}px;

    ${deviceQueries.mobile} {
        max-width: ${props => PALETTE_COLOR_SIZE_MOBILE * Math.round(props.count / 2)}px;
    }
`;