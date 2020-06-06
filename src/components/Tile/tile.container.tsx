import React, { FC } from "react";
import { useTile } from "../../hooks/tiles.hooks";
import { TileUI } from "./tile.ui";
import { MouseButton } from "../../utils/pointer.utils";
import { useInput } from "../../hooks/input.hooks";
import { devOnly, logIterationCount } from "../../utils/dev.utils";
import { usePrevious } from "../../hooks/general.hooks";

interface Props {
    row: number;
    column: number;
}

export const TileContainer: FC<Props> = ({
    row,
    column,
}) => {
    const { color, size, fillTile, clearTile } = useTile(column, row);
    const { inputHandler } = useInput({
        [MouseButton.LMB]: fillTile,
        [MouseButton.RMB]: clearTile,
    });

    logIterationCount("TileContainer", `${column && row && (column + 1) * (row + 1)}`);

    return (
        <TileUI
            inputHandler={inputHandler}
            color={color}
            row={row}
            column={column}
            size={size}
        />
    );
}