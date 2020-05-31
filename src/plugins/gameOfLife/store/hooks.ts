import { useSelector, useDispatch } from "react-redux";
import { selectIsRunning, selectGenerationTime } from "./selectors";
import { toggleIsRunning, setGenerationTime } from './actions';
import { PRESETS } from "./constants";
import { TilesPreset } from "../../../store/tiles/types";
import { setTiles } from "../../../store/tiles/actions";

export const useGameOfLife = () => {
    const dispatch = useDispatch();

    return {
        isRunning: useSelector(selectIsRunning),
        generationTime: useSelector(selectGenerationTime),
        toggleIsRunning: () => dispatch(toggleIsRunning()),
        tilesPresets: PRESETS,
        setTilesPreset: (preset?: TilesPreset) => preset && dispatch(setTiles(preset.tiles())),
        setGenerationTime: (value: number) => dispatch(setGenerationTime(value)),
    };
};

export type GameOfLifeBindings = ReturnType<typeof useGameOfLife>;