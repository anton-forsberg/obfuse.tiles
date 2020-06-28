import React, { FC } from "react";
import { Palette } from "../components/Palette/controller";
import { PaletteListStyled } from "./paletteList.styled";

interface Props {
    paletteIds: string[];
}

export const PaletteListTemplate: FC<Props> = ({
    paletteIds
}) => (
    <PaletteListStyled>
        {paletteIds.map(paletteId =>
            <Palette key={paletteId} paletteId={paletteId} />)}
    </PaletteListStyled>
);
