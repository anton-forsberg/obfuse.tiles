import React, { FC } from "react";
import { useColor } from "../../../hooks/color.hooks";
import { Eraser } from "../template";

export const EraserController: FC = () => {
    const { isSelected, setSelected } = useColor();

    return (
        <Eraser
            isSelected={isSelected}
            onClick={setSelected}
        />
    )
}