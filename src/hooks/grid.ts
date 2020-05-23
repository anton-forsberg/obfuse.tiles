import { selectSelectedGridRows, selectSelectedGridColumns, selectSelectedTileSize, selectSelectedTileScale } from './../store/selections/selectors';
import { useSelector, useDispatch } from 'react-redux';
import { getArrayOfLength } from '../utils/array';
import { setSelectedGridRows, setSelectedGridColumns, setSelectedTileScale } from "../store/selections/actions";


export const useGrid = () => {
    const rows = getArrayOfLength(useSelector(selectSelectedGridRows));
    const columns = getArrayOfLength(useSelector(selectSelectedGridColumns));
    const tileSize = useSelector(selectSelectedTileSize);

    return {
        rows,
        columns,
        tileSize,
    }
};

export const useGridValues = () => ({
    ...useGridRows(),
    ...useGridColumns(),
    ...useTileScale(),
});

export type GridValues = ReturnType<typeof useGridValues>;

export const useGridRows = () => {
    const dispatch = useDispatch();

    return {
        rows: useSelector(selectSelectedGridRows),
        setRows: (value: number) => dispatch(setSelectedGridRows(value))
    };
}

export const useGridColumns = () => {
    const dispatch = useDispatch();

    return {
        columns: useSelector(selectSelectedGridColumns),
        setColumns: (value: number) => dispatch(setSelectedGridColumns(value))
    };
}

export const useTileScale = () => {
    const dispatch = useDispatch();

    return {
        scale: useSelector(selectSelectedTileScale),
        setScale: (value: number) => dispatch(setSelectedTileScale(value))
    };
}