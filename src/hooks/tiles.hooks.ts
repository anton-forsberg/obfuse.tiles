import { AppState } from '../store/reducer';
import { selectSelectedTileSize } from '../store/selections/selections.selectors';
import { setTilesInit } from '../store/tiles/tiles.actions';
import { selectTileColorToDraw } from '../store/tiles/tiles.selectors';
import { useDispatch, useSelector } from 'react-redux';
import { useCallback } from 'react';
import { SetTileOperation } from '../store/tiles/tiles.types';

export const useTile = (column: number, row: number) => {
    const dispatch = useDispatch();

    return {
        color: useSelector((state: AppState) => selectTileColorToDraw(state, column, row)),
        size: useSelector(selectSelectedTileSize),
        fillTile: useCallback(() => dispatch(setTilesInit(column, row, SetTileOperation.Fill)), [dispatch, column, row]),
        clearTile: useCallback(() => dispatch(setTilesInit(column, row, SetTileOperation.Clear)), [dispatch, column, row]),
    };
}