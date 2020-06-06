import React, { FC } from "react";
import { useSelector } from "react-redux";
import { selectPaletteIds } from "../../../../store/palettes/palettes.selectors";
import { PaletteListUI } from "./paletteList.ui";

export const PaletteListContainer: FC = () => {
    const paletteIds = useSelector(selectPaletteIds, (left, right) => left.length === right.length);

    return (
        <PaletteListUI
            paletteIds={paletteIds}
        />
    );
};