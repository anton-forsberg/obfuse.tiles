import React, { FC } from "react";
import { PaletteStyle } from "./palette.styled";
import { PaletteColor } from "./components/PaletteColor";

interface Props {
    colors: string[];
    onClick: () => void;
    selected: boolean;
}

export const PaletteUI: FC<Props> = ({
    colors,
    onClick,
    selected,
}) => (
    <PaletteStyle
        selected={selected}
        onClick={onClick}
    >
        {colors.map(color => <PaletteColor color={color} />)}
    </PaletteStyle>
);