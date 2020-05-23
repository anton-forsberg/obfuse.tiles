import React, { FC } from "react";
import { GridStyle } from "./grid.styled";
import { Tile } from "../Tile";
import { getTileId } from "../../store/tiles/utils";

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
        {rows.map(row =>
            columns.map(column =>
                <Tile
                    key={getTileId(row, column)}
                    row={row}
                    column={column}
                />))}
    </GridStyle>
)