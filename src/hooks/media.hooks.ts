import { useTheme, useMediaQuery } from "@material-ui/core";
import { useEffect, useCallback } from "react";
import { useSetGridSize } from "./grid.hooks";

export const useMedia = () => {
    const { isMobile } = useDeviceType();
    const { setDefaultGridSizeDesktop, setDefaultGridSizeMobile } = useSetGridSize();

    const setGridSizeDesktop = useCallback(setDefaultGridSizeDesktop, [isMobile]);
    const setGridSizeMobile = useCallback(setDefaultGridSizeMobile, [isMobile]);

    useEffect(() => {
        isMobile
            ? setGridSizeMobile()
            : setGridSizeDesktop();
    }, [
        isMobile,
        setGridSizeDesktop,
        setGridSizeMobile,
    ]);
}

export const useDeviceType = () => {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
    const isTablet = useMediaQuery(theme.breakpoints.between("sm", "md"));
    const isDesktop = useMediaQuery(theme.breakpoints.up("md"));

    return { isMobile, isTablet, isDesktop };
}