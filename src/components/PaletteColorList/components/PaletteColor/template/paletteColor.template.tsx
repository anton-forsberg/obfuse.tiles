import React, { MouseEventHandler, FC } from "react";
import { PaletteColorStyled } from "./paletteColor.styled";

interface Props {
    onClick: MouseEventHandler;
    isSelected: boolean;
    color?: string;
}

export const PaletteColorTemplate: FC<Props> = ({
    onClick,
    color,
    isSelected,
}) => (
    <PaletteColorStyled
        color={color}
        isSelected={isSelected}
        onClick={onClick}
    />
)