import { selectSelectedGridRows, selectSelectedGridColumns, selectSelectedTileSize, selectSelectedTileScale, selectGridRows, selectGridColumns } from '../store/selections/selections.selectors';
import { useSelector, useDispatch } from 'react-redux';
import { setSelectedGridRows, setSelectedGridColumns, setSelectedTileScale, setSelectedGridSize } from "../store/selections/selections.actions";
import { setTiles } from '../store/tiles/tiles.actions';
import { DEFAULT_GRID_COLUMNS, DEFAULT_TILE_SCALE, DEFAULT_GRID_ROWS, DEFAULT_TILE_SIZE } from '../store/selections/selections.constants';
import { useDeviceType } from './media.hooks';
import { getTilePositions } from '../utils/tiles.utils';


export const useGrid = () => {
    const rows = useSelector(selectGridRows);
    const columns = useSelector(selectGridColumns);
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
        setRows: (value: number) => dispatch(setSelectedGridRows(value)),
        columns: useSelector(selectSelectedGridColumns),
        setColumns: (value: number) => dispatch(setSelectedGridColumns(value)),
        scale: useSelector(selectSelectedTileScale),
        setScale: (value: number) => dispatch(setSelectedTileScale(value)),
        clear: () => dispatch(setTiles({})),
        reset: setDefaultGridSizeDesktop,
    };
};

export const useSetGridSize = () => {
    const dispatch = useDispatch();
    const { isMobile } = useDeviceType();

    const setGridSize = (columns: number, rows: number, scale?: number) => dispatch(setSelectedGridSize(columns, rows, scale));

    const setDefaultGridSizeMobile = () => {
        const screenWidth = window.innerWidth;
        const screenHeight = window.innerHeight;
        const tileSize = screenWidth / DEFAULT_GRID_COLUMNS;
        const tileScale = tileSize / DEFAULT_TILE_SIZE;
        const rows = Math.round(screenHeight / tileSize);

        setGridSize(DEFAULT_GRID_COLUMNS, rows, tileScale);
    }

    return {
        setDefaultGridSizeDesktop: () => setGridSize(DEFAULT_GRID_COLUMNS, DEFAULT_GRID_ROWS, DEFAULT_TILE_SCALE),
        setDefaultGridSizeMobile,
        setGridSize: (columns: number, rows: number, scale?: number) => !isMobile && setGridSize(columns, rows, scale),
    }
}

export type GridConfigurations = ReturnType<typeof useGridConfigurations>;