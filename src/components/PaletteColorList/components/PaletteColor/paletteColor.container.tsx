import React, { FC } from "react";
import { PaletteColorUI } from "./paletteColor.ui";
import { useColor } from "../../../../hooks/color.hooks";

interface Props {
    colorId: string;
};

export const PaletteColorContainer: FC<Props> = ({
    colorId,
}) => {
    const { selected, setSelected, color } = useColor(colorId);

    return (
        <PaletteColorUI
            onClick={setSelected}
            selected={selected}
            color={color}
        />
    )
}    