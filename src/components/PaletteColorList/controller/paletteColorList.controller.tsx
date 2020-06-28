import React, { FC } from "react";
import { useSelector } from "react-redux";
import { PaletteColorList } from '../template';
import { selectSelectedPaletteColorIds } from "../../../store/palettes/palettes.selectors";

export const PaletteColorListController: FC = () => {
    const colorIds = useSelector(selectSelectedPaletteColorIds, (left, right) => left.length === right.length);

    return (
        <PaletteColorList
            colorIds={colorIds}
        />
    );
}