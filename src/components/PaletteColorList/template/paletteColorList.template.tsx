import React, { FC } from "react";
import { PaletteColorListStyled } from "./paletteColorList.styled";
import { PaletteColor } from "../components/PaletteColor/controller";

interface Props {
    colorIds: string[];
}

export const PaletteColorListTemplate: FC<Props> = ({
    colorIds,
}) => (
    <PaletteColorListStyled
        count={colorIds.length}
    >
        {colorIds.map(colorId =>
            <PaletteColor key={colorId} colorId={colorId} />)}
    </PaletteColorListStyled>
)