import React, { FC } from "react";
import { PaletteColorListStyle } from "./paletteColorList.styled";
import { PaletteColor } from "./components/PaletteColor";

interface Props {
    colorIds: string[];
}

export const PaletteColorListUI: FC<Props> = ({
    colorIds,
}) => (
    <PaletteColorListStyle
        count={colorIds.length}
    >
        {colorIds.map(colorId =>
            <PaletteColor key={colorId} colorId={colorId} />)}
    </PaletteColorListStyle>
)