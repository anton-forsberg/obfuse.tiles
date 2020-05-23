import React, { FC } from "react";
import { Palette } from "./components/Palette";
import { PaletteListStyle } from "./paletteList.styled";

interface Props {
    paletteIds: string[];
}

export const PaletteListUI: FC<Props> = ({
    paletteIds
}) => (
    <PaletteListStyle>
        {paletteIds.map(paletteId =>
            <Palette key={paletteId} paletteId={paletteId} />)}
    </PaletteListStyle>
);
