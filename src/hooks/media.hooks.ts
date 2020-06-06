import { useTheme, useMediaQuery } from "@material-ui/core";
import { useEffect, useCallback } from "react";
import { useSetGridSize } from "./grid.hooks";
import { breakpoints } from "../utils/theme.utils";

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
    const isMobile = useMediaQuery(breakpoints.mobile({ theme }), { noSsr: true });
    const isTablet = useMediaQuery(breakpoints.tablet({ theme }), { noSsr: true });
    const isDesktop = useMediaQuery(breakpoints.desktop({ theme }), { noSsr: true });

    return { isMobile, isTablet, isDesktop };
}