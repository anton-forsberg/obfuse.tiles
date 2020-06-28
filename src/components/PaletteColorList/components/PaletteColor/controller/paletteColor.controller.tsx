import React, { FC } from "react";
import { PaletteColor } from "../template";
import { useColor } from "../../../../../hooks/color.hooks";

interface Props {
    colorId: string;
};

export const PaletteColorController: FC<Props> = ({
    colorId,
}) => {
    const { isSelected, setSelected, color } = useColor(colorId);

    return (
        <PaletteColor
            onClick={setSelected}
            isSelected={isSelected}
            color={color}
        />
    )
}    