import React, { FC } from "react";
import { useSelector } from "react-redux";
import { selectColorCount } from "../../../../../../../store/tiles/tiles.selectors";
import { AppState } from "../../../../../../../store/reducer";
import { ColorCount } from "../template";
import { selectSelectedPaletteColor } from "../../../../../../../store/palettes/palettes.selectors";

interface Props {
    colorId: string;
}

export const ColorCountController: FC<Props> = ({
    colorId
}) => {
    const count = useSelector((state: AppState) => selectColorCount(state, colorId));
    const color = useSelector((state: AppState) => selectSelectedPaletteColor(state, colorId));

    if (!color) return null;

    return (
        <ColorCount
            color={color}
            count={count}
        />
    )
};
