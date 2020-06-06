import React, { FC } from "react";
import { GridStyle } from "./grid.styled";
import { Tile } from "../Tile";
import { getTileId } from "../../utils/tiles.utils";
import { TilePosition } from "../../store/tiles/tiles.types";

interface Props {
    rows: number[];
    columns: number[];
    tiles: TilePosition[];
    tileSize: number;
}

export const GridUI: FC<Props> = ({
    rows,
    columns,
    tiles,
    tileSize,
}) => (
    <GridStyle
        onContextMenu={e => e.preventDefault()}
        tileSize={tileSize}
        rows={rows.length}
        columns={columns.length}>
        {tiles.map(({ column, row }) => (
            <Tile
                key={getTileId(column, row)}
                row={row}
                column={column}
            />
        ))}
    </GridStyle>
)