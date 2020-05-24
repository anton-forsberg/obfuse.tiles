import { AppState } from '../store/index';
import { selectSelectedTileSize } from '../store/selections/selectors';
import { clearTile, fillTileRequest } from '../store/tiles/actions';
import { selectTileColor } from '../store/tiles/selectors';
import { useDispatch, useSelector } from 'react-redux';

export const useTile = (row: number, column: number) => {
    const dispatch = useDispatch();

    return {
        color: useSelector((state: AppState) => selectTileColor(state, row, column)),
        size: useSelector(selectSelectedTileSize),
        fillTile: () => dispatch(fillTileRequest(row, column)),
        clearTile: () => dispatch(clearTile(row, column)),
    };
}