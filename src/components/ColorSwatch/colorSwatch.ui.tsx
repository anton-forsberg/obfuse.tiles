import React, { FC } from "react";
import { ColorSwatchStyle } from "./colorSwatch.styled";
import { ColorSwatchColor } from "./components/ColorSwatchColor";
import { Color } from "../../store/colors/types";

interface Props {
    colors: Color[];
}

export const ColorSwatchUI: FC<Props> = ({
    colors,
}) => (
    <ColorSwatchStyle
        count={colors.length}
    >
        {colors.map(ColorSwatchColor)}
    </ColorSwatchStyle>
)