import { useMedia } from "../../hooks/media.hooks"
import React, { FC } from "react";
import { AppUI } from "./app.ui";
import { ThemeProvider } from "styled-components";
import { useTheme } from "@material-ui/core";

export const AppContainer: FC = () => {
    useMedia();
    const theme = useTheme();

    return (
        <ThemeProvider theme={theme}>
            <AppUI />
        </ThemeProvider>
    );
}