import React, { FC } from "react";
import { ColorSwatchColorUI } from "./colorSwatchColor.ui";
import { useColor } from "../../../../../../hooks/color";

interface Props {
    colorId: string;
};

export const ColorSwatchColorContainer: FC<Props> = ({
    colorId,
}) => {
    const { selected, setSelected, color } = useColor(colorId);

    return (
        <ColorSwatchColorUI
            onClick={setSelected}
            selected={selected}
            color={color}
        />
    )
}    