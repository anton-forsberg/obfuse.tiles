import { AppState } from '../store/reducer';
import { selectSelectedTileSize } from '../store/selections/selections.selectors';
import { clearTile, fillTileInit } from '../store/tiles/tiles.actions';
import { selectTileColorToDraw } from '../store/tiles/tiles.selectors';
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