import styled from "styled-components";
import { HIGHLIGHT_COLOR } from "../../../constants/styles.constants";

interface Props {
    isActive?: boolean;
}

export const IconButtonStyled = styled.div<Props>`
    display: flex;
    align-items: center;
    cursor: pointer;

    & svg {
        color: ${props => props.isActive ? HIGHLIGHT_COLOR : 'inherit'};
    }
`;