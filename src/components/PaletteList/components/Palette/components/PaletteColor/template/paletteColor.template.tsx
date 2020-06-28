import React, { FC } from "react";
import { PaletteColorStyled } from "./paletteColor.styled";

interface Props {
    color: string;
}

export const PaletteColorTemplate: FC<Props> = ({
    color,
}) => (
    <PaletteColorStyled
        color={color}
    />
)