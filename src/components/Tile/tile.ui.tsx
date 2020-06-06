import React, { FC, MouseEventHandler } from 'react';
import { TileStyle } from './tile.styled';

interface Props {
    color?: string;
    row?: number;
    column?: number;
    size: number;
    inputHandler?: MouseEventHandler;
};

export const TileUI: FC<Props> = ({
    color,
    row,
    column,
    size,
    inputHandler,
}) => (
    <TileStyle
        onMouseEnter={inputHandler}
        onMouseDown={inputHandler}
        color={color}
        row={row}
        column={column}
        size={size}
    />
);