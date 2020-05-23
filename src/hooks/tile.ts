import { AppState } from '../store/index';
import { selectSelectedColorId, selectSelectedTileSize } from '../store/selections/selectors';
import { setTile } from '../store/tiles/actions';
import { selectTileColor } from '../store/tiles/selectors';
import { useDispatch, useSelector } from 'react-redux';

export const useTile = (row: number, column: number) => {
    const dispatch = useDispatch();
    const selectedColorId = useSelector(selectSelectedColorId);
    const color = useSelector((state: AppState) => selectTileColor(state, row, column));
    const size = useSelector(selectSelectedTileSize);

    const fillTile = () => dispatch(setTile(row, column, selectedColorId));
    const clearTile = () => dispatch(setTile(row, column));

    return {
        color,
        size,
        fillTile,
        clearTile,
    };
}