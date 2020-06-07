import React, { MouseEventHandler, FC } from "react";
import { PaletteColorStyle } from "./paletteColor.styled";

interface Props {
    onClick: MouseEventHandler;
    selected: boolean;
    color?: string;
}

export const PaletteColorUI: FC<Props> = ({
    onClick,
    color,
    selected,
}) => (
    <PaletteColorStyle
        color={color}
        selected={selected}
        onClick={onClick}
    />
)