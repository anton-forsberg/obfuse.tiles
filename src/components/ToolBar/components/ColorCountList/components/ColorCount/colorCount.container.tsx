import React, { FC } from "react";
import { useSelector } from "react-redux";
import { selectColorCount } from "../../../../../../store/tiles/tiles.selectors";
import { AppState } from "../../../../../../store/reducer";
import { ColorCountUI } from "./colorCount.ui";
import { selectSelectedPaletteColor } from "../../../../../../store/palettes/palettes.selectors";

interface Props {
    colorId: string;
}

export const ColorCountContainer: FC<Props> = ({
    colorId
}) => {
    const count = useSelector((state: AppState) => selectColorCount(state, colorId));
    const color = useSelector((state: AppState) => selectSelectedPaletteColor(state, colorId));

    if (!color) return null;

    return (
        <ColorCountUI
            color={color}
            count={count}
        />
    )
};
