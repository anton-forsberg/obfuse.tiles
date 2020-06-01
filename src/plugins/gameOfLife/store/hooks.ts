import { useSelector, useDispatch } from "react-redux";
import { selectIsRunning, selectGenerationTime } from "./selectors";
import { toggleIsRunning, setGenerationTime } from './actions';
import { PRESETS } from "./constants";
import { TilesPreset } from "../../../store/tiles/types";
import { setTiles } from "../../../store/tiles/actions";
import { setSelectedGridSize } from "../../../store/selections/actions";

export const useGameOfLife = () => {
    const dispatch = useDispatch();

    const setTilesPreset = (preset?: TilesPreset) => {
        if (!preset) return;

        dispatch(setSelectedGridSize(preset.columns, preset.rows));
        dispatch(setTiles(preset.tiles()));
    };

    return {
        isRunning: useSelector(selectIsRunning),
        generationTime: useSelector(selectGenerationTime),
        toggleIsRunning: () => dispatch(toggleIsRunning()),
        tilesPresets: PRESETS,
        setTilesPreset,
        setGenerationTime: (value: number) => dispatch(setGenerationTime(value)),
    };
};

export type GameOfLifeBindings = ReturnType<typeof useGameOfLife>;