import styled from "styled-components";
import { TOOLBAR_BACKGROUND_COLOR, TOOLBAR_TEXT_COLOR, MOBILE_TOOLBAR_Z_INDEX } from "../../constants/styles.constants";

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
    z-index: ${MOBILE_TOOLBAR_Z_INDEX};
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    justify-content: flex-end;
`;

export const ToolBarMobileOpenStyle = styled.div<OpenProps>`
    display: ${props => props.isOpen ? 'flex' : 'none'};
    flex-direction: column;
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

export const ToolBarMobileItemStyle = styled.div`
    display: flex;
    margin-top: 10px;
    padding: 10px 0;
    padding-right: 10px;
    background-color: #513f8e;
    border-radius: 5px;
`;