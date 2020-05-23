import React, { FC, MouseEventHandler } from 'react';
import { TileStyle } from './tile.styled';

interface Props {
    color?: string;
    row?: number;
    column?: number;
    size: number;
    onMouseEnter?: MouseEventHandler;
    onMouseDown?: MouseEventHandler;
};

export const TileUI: FC<Props> = ({
    color,
    row,
    column,
    size,
    onMouseEnter,
    onMouseDown,
}) => (
    <TileStyle
        onMouseEnter={onMouseEnter}
        onMouseDown={onMouseDown}
        color={color}
        row={row}
        column={column}
        size={size}
    />
);
