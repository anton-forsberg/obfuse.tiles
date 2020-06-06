import React from 'react';
import { Grid } from '../Grid';
import { AppStyle } from './app.styled';
import { ToolBarSwitch } from './components/ToolBarSwitch';
import { GlobalStyle } from '../../style';

export const AppUI = () => (<>
    <AppStyle>
        <ToolBarSwitch />
        <Grid />
        <GlobalStyle />
    </AppStyle>
</>);

