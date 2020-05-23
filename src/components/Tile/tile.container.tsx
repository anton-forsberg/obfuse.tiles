import React, { FC } from "react";
import { useTile } from "../../hooks/tile";
import { TileUI } from "./tile.ui";
import { mouseEvent, MouseButtons } from "../../utils/mouse";

interface Props {
    row: number;
    column: number;
}

export const TileContainer: FC<Props> = ({
    row,
    column,
}) => {
    const { color, size, fillTile, clearTile } = useTile(row, column);

    const mouseEventHandler = mouseEvent(({ mouseButton }) => {
        if (mouseButton === MouseButtons.LMB) fillTile();
        if (mouseButton === MouseButtons.RMB) clearTile();
    });

    return (
        <TileUI
            onMouseEnter={mouseEventHandler}
            onMouseDown={mouseEventHandler}
            color={color}
            row={row}
            column={column}
            size={size}
        />
    );
}