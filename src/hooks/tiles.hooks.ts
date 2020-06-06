import { AppState } from '../store/reducer';
import { selectSelectedTileSize } from '../store/selections/selections.selectors';
import { clearTile, fillTileInit } from '../store/tiles/tiles.actions';
import { selectTileColorToDraw } from '../store/tiles/tiles.selectors';
import { useDispatch, useSelector } from 'react-redux';
import { useCallback } from 'react';

export const useTile = (column: number, row: number) => {
    const dispatch = useDispatch();

    return {
        color: useSelector((state: AppState) => selectTileColorToDraw(state, column, row)),
        size: useSelector(selectSelectedTileSize),
        fillTile: useCallback(() => dispatch(fillTileInit(column, row)), [dispatch, column, row]),
        clearTile: useCallback(() => dispatch(clearTile(column, row)), [dispatch, column, row]),
    };
}