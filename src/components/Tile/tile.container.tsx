import React, { FC } from "react";
import { useTile } from "../../hooks/tiles.hooks";
import { TileUI } from "./tile.ui";
import { mouseEvent, MouseButton } from "../../utils/pointer.utils";

interface Props {
    row: number;
    column: number;
}

export const TileContainer: FC<Props> = ({
    row,
    column,
}) => {
    const { color, size, fillTile, clearTile } = useTile(column, row);

    const mouseHandler = mouseEvent(({ mouseButton }) => {
        if (mouseButton === MouseButton.LMB) return fillTile();
        if (mouseButton === MouseButton.RMB) return clearTile();
    });

    return (
        <TileUI
            mouseHandler={mouseHandler}
            color={color}
            row={row}
            column={column}
            size={size}
        />
    );
}