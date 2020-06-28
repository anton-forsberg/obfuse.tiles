import styled from "styled-components";
import { CONTROL_BACKGROUND_COLOR, CONTROL_TEXT_COLOR } from "../../../constants/styles.constants";

export const InputStyled = styled.input`
    font-family: inherit;
    text-align: center;
    width: 60px;
    height: 40px;
    background-color: ${CONTROL_BACKGROUND_COLOR};
    color: ${CONTROL_TEXT_COLOR};
    border: none;
`;