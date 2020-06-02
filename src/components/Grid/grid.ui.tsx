import React, { FC } from "react";
import { GridStyle } from "./grid.styled";
import { Tile } from "../Tile";
import { getTileId } from "../../utils/tiles.utils";

interface Props {
    rows: number[];
    columns: number[];
    tileSize: number;
}

export const GridUI: FC<Props> = ({
    rows,
    columns,
    tileSize,
}) => (
    <GridStyle
        onContextMenu={e => e.preventDefault()}
        tileSize={tileSize}
        rows={rows.length}
        columns={columns.length}>
        {columns.map(column =>
            rows.map(row =>
                <Tile
                    key={getTileId(column, row)}
                    row={row}
                    column={column}
                />))}
    </GridStyle>
)