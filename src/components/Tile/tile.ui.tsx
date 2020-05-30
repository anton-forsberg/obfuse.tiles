import React, { FC, MouseEventHandler, PointerEventHandler } from 'react';
import { TileStyle } from './tile.styled';

interface Props {
    color?: string;
    row?: number;
    column?: number;
    size: number;
    mouseHandler?: MouseEventHandler;
    pointerHandler?: PointerEventHandler;
};

export const TileUI: FC<Props> = ({
    color,
    row,
    column,
    size,
    mouseHandler,
    pointerHandler,
}) => (
    <TileStyle
        onMouseEnter={mouseHandler}
        onMouseDown={mouseHandler}
        onPointerEnter={pointerHandler}
        color={color}
        row={row}
        column={column}
        size={size}
    />
);
