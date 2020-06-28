import React, { FC } from 'react';
import { useGrid } from '../../../hooks/grid.hooks';
import { Grid } from '../template';

export const GridController: FC = () => {
    const { columns, rows, tiles, tileSize } = useGrid();

    return (
        <Grid
            columns={columns}
            rows={rows}
            tileSize={tileSize}
            tiles={tiles}
        />
    )
};