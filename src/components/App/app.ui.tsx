import React from 'react';
import { Grid } from '../Grid';
import { AppStyle } from './app.styled';
import { ToolBarSwitch } from './components/ToolBarSwitch';
import { GlobalStyle } from '../../style';
import { ServiceWorker } from './components/ServiceWorker';

export const AppUI = () => (
    <AppStyle>
        <GlobalStyle />
        <ToolBarSwitch />
        <Grid />
        <ServiceWorker />
    </AppStyle>
);

