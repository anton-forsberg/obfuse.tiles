import { createGlobalStyle } from 'styled-components'
import { deviceQueries } from './utils/theme.utils';


export const GlobalStyle = createGlobalStyle`
    body {
        font-family: 'Montserrat', sans-serif;
        background-color: #171717;
        margin: 0;

        ${deviceQueries.mobile} {
            overflow: hidden;
        }
    }
`;