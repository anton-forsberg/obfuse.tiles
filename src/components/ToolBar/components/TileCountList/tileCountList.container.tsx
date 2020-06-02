import React, { FC } from "react";
import { useSelector } from "react-redux";
import { TileCountListUI } from "./tileCountList.ui";
import { selectTileColorCount } from "../../../../store/tiles/tiles.selectors";


export const TileCountListContainer: FC = () => {
    const tileColorCounts = useSelector(selectTileColorCount);

    return (
        <TileCountListUI
            tileColorCounts={tileColorCounts}
        />
    );
}