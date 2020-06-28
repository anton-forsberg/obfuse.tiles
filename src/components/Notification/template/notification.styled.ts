import styled from "styled-components";
import { TOOLBAR_BACKGROUND_COLOR, TOOLBAR_TEXT_COLOR, NOTIFICATION_Z_INDEX } from "../../../constants/styles.constants";
import { deviceQueries } from "../../../utils/theme.utils";
import tinycolor from 'tinycolor2';

const OUTER_PADDING = 20;
const BUTTON_PADDING = OUTER_PADDING / 2;

export const NotificationStyled = styled.div`
    background-color: ${TOOLBAR_BACKGROUND_COLOR};
    color: ${TOOLBAR_TEXT_COLOR};
    position: fixed;
    bottom: 10px;
    left: 10px;
    padding: ${OUTER_PADDING}px;
    padding-right: ${BUTTON_PADDING}px;
    display: flex;
    align-items: center;
    z-index: ${NOTIFICATION_Z_INDEX};

    ${deviceQueries.mobile} {
        left: 0;
        bottom: 0;
        width: calc(100% - ${OUTER_PADDING + BUTTON_PADDING}px);
    }
`;

export const NotificationActionStyled = styled.div`
    margin-left: ${OUTER_PADDING}px;
    padding: ${BUTTON_PADDING}px;
    cursor: pointer;

    &:active {
        background-color: ${tinycolor(TOOLBAR_BACKGROUND_COLOR).brighten().toHexString()}
    }
`;