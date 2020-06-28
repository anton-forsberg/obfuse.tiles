import React, { FC } from "react";
import { useSelector } from "react-redux";
import { ColorCountList } from "../template";
import { selectSelectedPaletteColorIds } from "../../../../../store/palettes/palettes.selectors";


export const ColorCountListController: FC = () => {
    const colorIds = useSelector(selectSelectedPaletteColorIds, (left, right) => left.length === right.length);

    return (
        <ColorCountList
            colorIds={colorIds}
        />
    );
}