import { selectSelectedGridRows, selectSelectedGridColumns, selectSelectedTileSize, selectSelectedTileScale, selectGridRows, selectGridColumns } from '../store/selections/selections.selectors';
import { useSelector, useDispatch } from 'react-redux';
import { setSelectedGridRows, setSelectedGridColumns, setSelectedTileScale } from "../store/selections/selections.actions";
import { setTiles } from '../store/tiles/tiles.actions';


export const useGrid = () => {
    const rows = useSelector(selectGridRows);
    const columns = useSelector(selectGridColumns);
    const tileSize = useSelector(selectSelectedTileSize);

    return {
        rows,
        columns,
        tileSize,
    }
};

export const useGridConfigurations = () => {
    const dispatch = useDispatch();

    return {
        rows: useSelector(selectSelectedGridRows),
        setRows: (value: number) => dispatch(setSelectedGridRows(value)),
        columns: useSelector(selectSelectedGridColumns),
        setColumns: (value: number) => dispatch(setSelectedGridColumns(value)),
        scale: useSelector(selectSelectedTileScale),
        setScale: (value: number) => dispatch(setSelectedTileScale(value)),
        clear: () => dispatch(setTiles({})),
    };
};

export type GridConfigurations = ReturnType<typeof useGridConfigurations>;