import React, { FC } from "react";
import { Color } from "../../../../store/colors/types";
import { ColorSwatchColorUI } from "./colorSwatchColor.ui";
import { useColor } from "../../../../hooks/color";

interface Props extends Color {};

export const ColorSwatchColorContainer: FC<Props> = ({
    id,
    value
}) => {
    const { selected, setSelectedColor } = useColor(id);

    return (
        <ColorSwatchColorUI
            onClick={() =>  setSelectedColor()}
            selected={selected}
            value={value}
        />
    )
}    