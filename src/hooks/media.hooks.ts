import { useTheme, useMediaQuery } from "@material-ui/core";
import { useEffect } from "react";
import { useSetGridSize } from "./grid.hooks";
import { MediaQuery, deviceQueries } from "../utils/theme.utils";

export const useMedia = () => {
    const isMobile = useQuery(deviceQueries.mobile);
    const { setDefaultGridSizeDesktop, setDefaultGridSizeMobile } = useSetGridSize();

    useEffect(() => {
        isMobile
            ? setDefaultGridSizeMobile()
            : setDefaultGridSizeDesktop();
    }, [
        isMobile,
        setDefaultGridSizeDesktop,
        setDefaultGridSizeMobile,
    ]);
}

export const useQuery = (query: MediaQuery) => {
    const theme = useTheme();
    return useMediaQuery(query({ theme }), { noSsr: true });
}