import React from 'react';
import { Grid } from '../Grid';
import { AppStyle } from './app.styled';
import { ToolBar } from '../ToolBar';

export const App = () => (<>
    <AppStyle>
        <ToolBar />
        <Grid />
    </AppStyle>
</>);

