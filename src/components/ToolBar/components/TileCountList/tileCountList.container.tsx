import React, { FC } from "react";
import { useSelector } from "react-redux";
import { TileCountListUI } from "./tileCountList.ui";
import { selectSelectedPaletteColorIds } from "../../../../store/palettes/palettes.selectors";


export const TileCountListContainer: FC = () => {
    const colorIds = useSelector(selectSelectedPaletteColorIds, (left, right) => left.length === right.length);

    return (
        <TileCountListUI
            colorIds={colorIds}
        />
    );
}