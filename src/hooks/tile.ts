import { selectColor } from '../store/colors/selectors';
import { AppState } from '../store/index';
import { selectSelectedColorId, selectSelectedTileSize } from '../store/selections/selectors';
import { setTile } from '../store/tiles/actions';
import { selectTile } from '../store/tiles/selectors';
import { useDispatch, useSelector } from 'react-redux';

export const useTile = (row: number, column: number) => {
    const dispatch = useDispatch();
    const selectedColorId = useSelector(selectSelectedColorId);
    const colorId = useSelector((state: AppState) => selectTile(state, row, column));
    const color = useSelector((state: AppState) => selectColor(state, colorId));
    const size = useSelector(selectSelectedTileSize);

    const fillTile = () => dispatch(setTile(row, column, selectedColorId));
    const clearTile = () => dispatch(setTile(row, column));

    return {
        color,
        colorId,
        size,
        fillTile,
        clearTile,
    };
}