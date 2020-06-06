import styled from "styled-components";
import { TOOLBAR_BACKGROUND_COLOR, TOOLBAR_TEXT_COLOR } from "../../constants/styles.constants";


export const ToolBarStyle = styled.div`
    background-color: ${TOOLBAR_BACKGROUND_COLOR};
    color: ${TOOLBAR_TEXT_COLOR};
    padding: 20px;
    display: flex;
    align-items: center;
`