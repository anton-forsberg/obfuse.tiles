import React, { FC } from "react";
import { useTile } from "../../../hooks/tiles.hooks";
import { Tile } from "../template";
import { TileElement } from "../template/tile.template";
import { useInput, useTouchEnter } from "../../../hooks/input.hooks";
import { MouseButton } from "../../../utils/input.utils";

interface Props {
    row: number;
    column: number;
}

export const TileController: FC<Props> = ({
    row,
    column,
}) => {
    const { color, size, fillTile, clearTile } = useTile(column, row);
    const { inputHandler } = useInput({
        [MouseButton.LMB]: fillTile,
        [MouseButton.RMB]: clearTile,
    });

    const ref = useTouchEnter<TileElement>(fillTile);

    return (
        <Tile
            forwardRef={ref}
            inputHandler={inputHandler}
            color={color}
            row={row}
            column={column}
            size={size}
        />
    );
}