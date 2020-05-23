import React, { FC } from "react";
import { useSelector } from "react-redux";
import { ColorSwatchUI } from './colorSwatch.ui';
import { selectSelectedPaletteColorIds } from "../../../../store/palettes/selectors";

export const ColorSwatchContainer: FC = () => {
    const colorIds = useSelector(selectSelectedPaletteColorIds);

    return (
        <ColorSwatchUI
            colorIds={colorIds}
        />
    );
}