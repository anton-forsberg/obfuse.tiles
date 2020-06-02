import React, { FC } from 'react';
import { useGrid } from '../../hooks/grid.hooks';
import { GridUI } from './grid.ui';

export const GridContainer: FC = () => {
    const { rows, columns, tileSize } = useGrid();

    return (
        <GridUI
            tileSize={tileSize}
            rows={rows}
            columns={columns}
        />
    )
};