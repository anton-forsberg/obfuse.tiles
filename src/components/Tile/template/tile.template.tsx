import React, { FC, MouseEventHandler, RefObject } from 'react';
import { TileStyled } from './tile.styled';

export type TileElement = HTMLDivElement;

interface Props {
    color?: string;
    row?: number;
    column?: number;
    size: number;
    forwardRef?: RefObject<TileElement>;
    inputHandler?: MouseEventHandler;
};

export const TileTemplate: FC<Props> = ({
    color,
    row,
    column,
    size,
    forwardRef,
    inputHandler,
}) => (
    <TileStyled
        ref={forwardRef}
        onMouseEnter={inputHandler}
        onMouseDown={inputHandler}
        color={color}
        row={row}
        column={column}
        size={size}
    />
);