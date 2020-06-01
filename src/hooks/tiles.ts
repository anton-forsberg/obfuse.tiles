import { AppState } from '../store/index';
import { selectSelectedTileSize } from '../store/selections/selectors';
import { clearTile, fillTileInit } from '../store/tiles/actions';
import { selectTileColorToDraw } from '../store/tiles/selectors';
import { useDispatch, useSelector } from 'react-redux';

export const useTile = (column: number, row: number) => {
    const dispatch = useDispatch();

    return {
        color: useSelector((state: AppState) => selectTileColorToDraw(state, column, row)),
        size: useSelector(selectSelectedTileSize),
        fillTile: () => dispatch(fillTileInit(column, row)),
        clearTile: () => dispatch(clearTile(column, row)),
    };
}