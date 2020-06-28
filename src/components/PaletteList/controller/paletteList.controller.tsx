import React, { FC } from "react";
import { useSelector } from "react-redux";
import { selectPaletteIds } from "../../../store/palettes/palettes.selectors";
import { PaletteList } from "../template";

export const PaletteListController: FC = () => {
    const paletteIds = useSelector(selectPaletteIds, (left, right) => left.length === right.length);

    return (
        <PaletteList
            paletteIds={paletteIds}
        />
    );
};