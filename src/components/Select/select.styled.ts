import styled from "styled-components";
import { CONTROL_BACKGROUND_COLOR, CONTROL_TEXT_COLOR } from "../../constants/styles.constants";


export const SelectStyle = styled.select`
    font-family: inherit;
    text-align: center;
    background-color: ${CONTROL_BACKGROUND_COLOR};
    color: ${CONTROL_TEXT_COLOR};
    border: none;
    padding: 5px;
    height: 40px;
    cursor: pointer;
`;

export const SelectOptionStyle = styled.option`
`;