import { useSelector, useDispatch } from "react-redux";
import { selectIsRunning, selectGenerationTime } from "./gameOfLife.selectors";
import { toggleIsRunning, setGenerationTime } from './gameOfLife.actions';
import { PRESETS } from "./gameOfLife.constants";
import { TilesPreset } from "../../../store/tiles/tiles.types";
import { setTiles } from "../../../store/tiles/tiles.actions";
import { useSetGridSize } from "../../../hooks/grid.hooks";
import { useCallback } from "react";

export const useGameOfLife = () => {
    const dispatch = useDispatch();
    const { updateGridSize } = useSetGridSize();

    const setTilesPreset = useCallback((preset?: TilesPreset) => {
        if (!preset) return;

        if (preset.columns && preset.rows) updateGridSize(preset.columns, preset.rows);

        dispatch(setTiles(preset.tiles()));
    }, [dispatch, updateGridSize]);

    return {
        isRunning: useSelector(selectIsRunning),
        generationTime: useSelector(selectGenerationTime),
        toggleIsRunning: useCallback(() => dispatch(toggleIsRunning()), [dispatch]),
        tilesPresets: PRESETS,
        setTilesPreset,
        setGenerationTime: useCallback((value: number) => dispatch(setGenerationTime(value)), [dispatch]),
    };
};

export type GameOfLifeBindings = ReturnType<typeof useGameOfLife>;