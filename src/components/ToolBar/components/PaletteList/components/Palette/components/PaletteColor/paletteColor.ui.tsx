import React, { FC } from "react";
import { PaletteColorStyle } from "./paletteColor.styled";

interface Props {
    color: string;
}

export const PaletteColorUI: FC<Props> = ({
    color,
}) => (
    <PaletteColorStyle
        color={color}
    />
)