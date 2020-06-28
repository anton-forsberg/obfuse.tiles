import React, { FC } from "react";
import { App } from "../template";
import { ThemeProvider } from "styled-components";
import { useTheme } from "@material-ui/core";
import { MediaHandler } from "../components/MediaHandler/controller";

export const AppController: FC = () => {
    const theme = useTheme();

    return (
        <ThemeProvider theme={theme}>
            <App />
            <MediaHandler />
        </ThemeProvider>
    );
}