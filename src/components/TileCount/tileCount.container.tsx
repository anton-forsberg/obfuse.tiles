import React, { FC } from "react";
import { useSelector } from "react-redux";
import { selectColorCount } from "../../store/colors/selectors";
import { TileCountUI } from "./tileCount.ui";


export const TileCountContainer: FC = () => {
    const colorCounts = useSelector(selectColorCount);

    return (
        <TileCountUI
            colorCounts={colorCounts}
        />
    );
}