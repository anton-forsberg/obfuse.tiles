import React, { FC } from "react";
import { BrushTile } from "./components/BrushTile";
import { BrushStyle } from "./brush.style";
import { getTileId } from "../../../../utils/tiles.utils";
import { TilePosition } from "../../../../store/tiles/tiles.types";

interface Props { 
    brushTiles: TilePosition[];
    columns: number;
    rows: number;
    onClick: () => void;
    isSelected: boolean;
};

export const BrushUI: FC<Props> = ({
    brushTiles,
    columns,
    rows,
    onClick,
    isSelected,
}) => (
    <BrushStyle
        columns={columns}
        rows={rows}
        onClick={onClick}
    >
        {brushTiles.map(({ column, row }) => (
            <BrushTile
                key={getTileId(column, row)}
                column={column}
                row={row}
                isSelected={isSelected}
            />
        ))}
    </BrushStyle>
);