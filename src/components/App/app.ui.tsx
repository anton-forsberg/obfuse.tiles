import React from 'react';
import { Grid } from '../Grid';
import { AppStyle } from './app.styled';
import { ToolBarSwitch } from './components/ToolBarSwitch';

export const AppUI = () => (<>
    <AppStyle>
        <ToolBarSwitch />
        <Grid />
    </AppStyle>
</>);

