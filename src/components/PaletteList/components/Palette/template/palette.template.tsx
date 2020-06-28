import React, { FC } from "react";
import { PaletteStyled } from "./palette.styled";
import { PaletteColor } from "../components/PaletteColor/template";

interface Props {
    colors: string[];
    onClick: () => void;
    selected: boolean;
}

export const PaletteTemplate: FC<Props> = ({
    colors,
    onClick,
    selected,
}) => (
    <PaletteStyled
        selected={selected}
        onClick={onClick}
    >
        {colors.map(color =>
            <PaletteColor key={color} color={color} />)}
    </PaletteStyled>
);