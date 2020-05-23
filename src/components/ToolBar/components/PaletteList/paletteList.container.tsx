import React, { FC } from "react";
import { useSelector } from "react-redux";
import { selectPaletteIds } from "../../../../store/palettes/selectors";
import { PaletteListUI } from "./paletteList.ui";

export const PaletteListContainer: FC = () => {
    const paletteIds = useSelector(selectPaletteIds);

    return (
        <PaletteListUI
            paletteIds={paletteIds}
        />
    );
};