import React, { MouseEventHandler, FC } from "react";
import { ColorSwatchColorStyle } from "./colorSwatchColor.styled";

interface Props {
    onClick: MouseEventHandler;
    selected: boolean;
    value: string;
}

export const ColorSwatchColorUI: FC<Props> = ({
    onClick,
    value,
    selected,
}) => (
    <ColorSwatchColorStyle
        color={value}
        selected={selected}
        onClick={onClick}
    />
)