import React, { MouseEventHandler, FC } from "react";
import { PaletteColorStyle } from "./paletteColor.styled";

interface Props {
    onClick: MouseEventHandler;
    isSelected: boolean;
    color?: string;
}

export const PaletteColorUI: FC<Props> = ({
    onClick,
    color,
    isSelected,
}) => (
    <PaletteColorStyle
        color={color}
        isSelected={isSelected}
        onClick={onClick}
    />
)