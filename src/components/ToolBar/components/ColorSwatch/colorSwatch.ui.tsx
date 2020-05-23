import React, { FC } from "react";
import { ColorSwatchStyle } from "./colorSwatch.styled";
import { ColorSwatchColor } from "./components/ColorSwatchColor";

interface Props {
    colorIds: string[];
}

export const ColorSwatchUI: FC<Props> = ({
    colorIds,
}) => (
    <ColorSwatchStyle
        count={colorIds.length}
    >
        {colorIds.map(colorId =>
            <ColorSwatchColor key={colorId} colorId={colorId} />)}
    </ColorSwatchStyle>
)