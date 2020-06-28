import React, { FC } from "react";
import { usePalette } from "../../../../../hooks/palettes.hooks";
import { Palette } from "../template";

interface Props {
    paletteId: string;
}

export const PaletteController: FC<Props> = ({
    paletteId,
}) => {
    const { colors, selected, setSelected } = usePalette(paletteId);

    return (
        <Palette
            colors={colors}
            onClick={setSelected}
            selected={selected}
        />
    )
}
