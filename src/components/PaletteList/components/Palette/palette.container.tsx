import React, { FC } from "react";
import { usePalette } from "../../../../hooks/palettes.hooks";
import { PaletteUI } from "./palette.ui";

interface Props {
    paletteId: string;
}

export const PaletteContainer: FC<Props> = ({
    paletteId,
}) => {
    const { colors, selected, setSelected } = usePalette(paletteId);

    return (
        <PaletteUI
            colors={colors}
            onClick={setSelected}
            selected={selected}
        />
    )
}
