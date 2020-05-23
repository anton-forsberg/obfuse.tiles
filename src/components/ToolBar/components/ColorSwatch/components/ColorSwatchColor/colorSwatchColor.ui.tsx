import React, { MouseEventHandler, FC } from "react";
import { ColorSwatchColorStyle } from "./colorSwatchColor.styled";

interface Props {
    onClick: MouseEventHandler;
    selected: boolean;
    color?: string;
}

export const ColorSwatchColorUI: FC<Props> = ({
    onClick,
    color,
    selected,
}) => (
    <ColorSwatchColorStyle
        color={color}
        selected={selected}
        onClick={onClick}
    />
)