import styled from "styled-components";
import { TOOLBAR_BACKGROUND_COLOR, TOOLBAR_TEXT_COLOR } from "../../constants/styles.constants";

interface OpenProps {
    isOpen: boolean;
}

interface ExpanderProps {
    isHidden?: boolean;
}

export const ToolBarMobileStyle = styled.div`
    position: fixed;
    color: ${TOOLBAR_TEXT_COLOR};
    bottom: 10px;
    right: 10px;
    z-index: 1;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    justify-content: flex-end;
`;

export const ToolBarMobileOpenStyle = styled.div<OpenProps>`
    display: ${props => props.isOpen ? 'flex' : 'none'}
`;

export const ToolBarMobileExpanderStyle = styled.div<ExpanderProps>`
    width: 50px;
    height: 50px;
    margin-top: 10px;
    border-radius: 50%;
    background-color: ${TOOLBAR_BACKGROUND_COLOR};
    display: flex;
    align-items: center;
    justify-content: center;
    opacity: ${props => props.isHidden ? '.4' : '1'};
`;