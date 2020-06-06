import React, { FC } from 'react';
import { useGrid } from '../../hooks/grid.hooks';
import { GridUI } from './grid.ui';

export const GridContainer: FC = () => {
    const { columns, rows, tiles, tileSize } = useGrid();

    return (
        <GridUI
            columns={columns}
            rows={rows}
            tileSize={tileSize}
            tiles={tiles}
        />
    )
};