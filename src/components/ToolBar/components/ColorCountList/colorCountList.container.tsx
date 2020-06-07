import React, { FC } from "react";
import { useSelector } from "react-redux";
import { ColorCountListUI } from "./colorCountList.ui";
import { selectSelectedPaletteColorIds } from "../../../../store/palettes/palettes.selectors";


export const ColorCountListContainer: FC = () => {
    const colorIds = useSelector(selectSelectedPaletteColorIds, (left, right) => left.length === right.length);

    return (
        <ColorCountListUI
            colorIds={colorIds}
        />
    );
}