import React, { FC } from "react";
import { useSelector } from "react-redux";
import { PaletteColorListUI } from './paletteColorList.ui';
import { selectSelectedPaletteColorIds } from "../../store/palettes/palettes.selectors";

export const PaletteColorListContainer: FC = () => {
    const colorIds = useSelector(selectSelectedPaletteColorIds, (left, right) => left.length === right.length);

    return (
        <PaletteColorListUI
            colorIds={colorIds}
        />
    );
}