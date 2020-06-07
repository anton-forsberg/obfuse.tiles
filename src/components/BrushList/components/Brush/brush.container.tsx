import React, { FC } from "react";
import { BrushType } from "../../../../utils/brush.utils";
import { useBrush } from "../../../../hooks/brushes.hooks";
import { BrushUI } from "./brush.ui";

interface Props {
    brushType: BrushType;
}

export const BrushContainer: FC<Props> = ({
    brushType,
}) => {
    const { brushTiles, columns, rows, isSelected, setSelected } = useBrush(brushType);

    return (
        <BrushUI
            brushTiles={brushTiles}
            columns={columns}
            rows={rows}
            isSelected={isSelected}
            onClick={setSelected}
        />
    )
}