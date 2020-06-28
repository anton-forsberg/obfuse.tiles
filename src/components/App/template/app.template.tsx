import React, { FC } from 'react';
import { Grid } from '../../Grid/controller';
import { AppStyled } from './app.styled';
import { ToolBarSwitch } from '../components/ToolBarSwitch/controller';
import { GlobalStyle } from '../../../style';
import { ServiceWorker } from '../components/ServiceWorker/controller';

export const AppTemplate: FC = () => (
    <AppStyled onContextMenu={e => e.preventDefault()}>
        <GlobalStyle />
        <ToolBarSwitch />
        <Grid />
        <ServiceWorker />
    </AppStyled>
);

