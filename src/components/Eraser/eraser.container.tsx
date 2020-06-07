import React, { FC } from "react";
import { useColor } from "../../hooks/color.hooks";
import { EraserUI } from "./eraser.ui";

export const EraserContainer: FC = () => {
    const { isSelected, setSelected } = useColor();

    return (
        <EraserUI
            isSelected={isSelected}
            onClick={setSelected}
        />
    )
}