import { selectSelectedGridRows, selectSelectedGridColumns, selectSelectedTileSize, selectSelectedTileScale, selectGridRows, selectGridColumns } from '../store/selections/selections.selectors';
import { useSelector, useDispatch } from 'react-redux';
import { setSelectedGridRows, setSelectedGridColumns, setSelectedTileScale, setSelectedGridSize } from "../store/selections/selections.actions";
import { setTiles } from '../store/tiles/tiles.actions';
import { DEFAULT_GRID_COLUMNS, DEFAULT_TILE_SCALE, DEFAULT_GRID_ROWS, DEFAULT_TILE_SIZE } from '../store/selections/selections.constants';
import { getTilePositions } from '../utils/tiles.utils';
import { useCallback } from 'react';
import { useQuery } from './media.hooks';
import { deviceQueries } from '../utils/theme.utils';


export const useGrid = () => {
    const rows = useSelector(selectGridRows, (left, right) => left.length === right.length);
    const columns = useSelector(selectGridColumns, (left, right) => left.length === right.length);
    const tileSize = useSelector(selectSelectedTileSize);
    const tiles = getTilePositions(columns, rows);

    return {
        rows,
        columns,
        tileSize,
        tiles,
    }
};

export const useGridConfigurations = () => {
    const dispatch = useDispatch();

    const { setDefaultGridSizeDesktop } = useSetGridSize();

    return {
        rows: useSelector(selectSelectedGridRows),
        setRows: useCallback((value: number) => dispatch(setSelectedGridRows(value)), [dispatch]),
        columns: useSelector(selectSelectedGridColumns),
        setColumns: useCallback((value: number) => dispatch(setSelectedGridColumns(value)), [dispatch]),
        scale: useSelector(selectSelectedTileScale),
        setScale: useCallback((value: number) => dispatch(setSelectedTileScale(value)), [dispatch]),
        clear: useCallback(() => dispatch(setTiles({})), [dispatch]),
        reset: setDefaultGridSizeDesktop,
    };
};

export const useSetGridSize = () => {
    const dispatch = useDispatch();
    const isMobile = useQuery(deviceQueries.mobile);

    const setGridSize = useCallback((columns: number, rows: number, scale?: number) =>
        dispatch(setSelectedGridSize(columns, rows, scale)), [dispatch]);

    const setDefaultGridSizeMobile = useCallback(() => {
        const screenWidth = window.innerWidth;
        const screenHeight = window.innerHeight;
        const tileSize = screenWidth / DEFAULT_GRID_COLUMNS;
        const tileScale = tileSize / DEFAULT_TILE_SIZE;
        const rows = Math.round(screenHeight / tileSize);

        setGridSize(DEFAULT_GRID_COLUMNS, rows, tileScale);
    }, [setGridSize])

    const setDefaultGridSizeDesktop = useCallback(() =>
        setGridSize(DEFAULT_GRID_COLUMNS, DEFAULT_GRID_ROWS, DEFAULT_TILE_SCALE), [setGridSize])

    const updateGridSize = useCallback((columns: number, rows: number, scale?: number) =>
        !isMobile && setGridSize(columns, rows, scale), [isMobile, setGridSize]);

    return {
        setDefaultGridSizeDesktop,
        setDefaultGridSizeMobile,
        updateGridSize,
    }
}

export type GridConfigurations = ReturnType<typeof useGridConfigurations>;