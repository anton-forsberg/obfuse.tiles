import React, { FC } from "react";
import { GridStyled } from "./grid.styled";
import { Tile } from "../../Tile/controller";
import { getTileId } from "../../../utils/tiles.utils";
import { TilePosition } from "../../../store/tiles/tiles.types";

interface Props {
    rows: number[];
    columns: number[];
    tiles: TilePosition[];
    tileSize: number;
}

export const GridTemplate: FC<Props> = ({
    rows,
    columns,
    tiles,
    tileSize,
}) => (
    <GridStyled
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
    </GridStyled>
)