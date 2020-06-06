import styled from "styled-components";
import { TOOLBAR_BACKGROUND_COLOR } from "../../constants/styles.constants";
import { breakpoints } from "../../utils/theme.utils";


export const PluginsStyle = styled.div`
    display: flex;

    ${breakpoints.mobile} {
        flex-direction: column;
        & > * {
            margin-top: 10px;
            padding: 10px 0;
            padding-right: 10px;
            background-color: ${TOOLBAR_BACKGROUND_COLOR};
            border-radius: 5px;
        }
    }
`;