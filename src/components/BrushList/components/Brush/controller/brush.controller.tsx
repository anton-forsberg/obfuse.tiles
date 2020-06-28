import React, { FC } from "react";
import { BrushType } from "../../../../../utils/brush.utils";
import { useBrush } from "../../../../../hooks/brushes.hooks";
import { Brush } from "../template";

interface Props {
    brushType: BrushType;
}

export const BrushController: FC<Props> = ({
    brushType,
}) => {
    const { brushTiles, columns, rows, isSelected, setSelected } = useBrush(brushType);

    return (
        <Brush
            brushTiles={brushTiles}
            columns={columns}
            rows={rows}
            isSelected={isSelected}
            onClick={setSelected}
        />
    )
}