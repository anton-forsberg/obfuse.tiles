import React, { FC } from "react";
import { AppUI } from "./app.ui";
import { ThemeProvider } from "styled-components";
import { useTheme } from "@material-ui/core";
import { MediaHandler } from "./components/MediaHandler";

export const AppContainer: FC = () => {
    const theme = useTheme();

    return (
        <ThemeProvider theme={theme}>
            <AppUI />
            <MediaHandler />
        </ThemeProvider>
    );
}