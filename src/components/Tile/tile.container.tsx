import React, { FC } from "react";
import { useTile } from "../../hooks/tile";
import { TileUI } from "./tile.ui";
import { mouseEvent, MouseButton } from "../../utils/pointer";

interface Props {
    row: number;
    column: number;
}

export const TileContainer: FC<Props> = ({
    row,
    column,
}) => {
    const { color, size, fillTile, clearTile } = useTile(row, column);

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