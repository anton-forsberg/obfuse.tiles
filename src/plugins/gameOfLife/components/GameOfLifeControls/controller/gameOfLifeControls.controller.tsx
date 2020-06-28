import React, { FC } from "react";
import { GameOfLifeControls } from '../template';
import { useGameOfLife } from "../../../store/gameOfLife.hooks";

export const GameOfLifeControlsController: FC = () => {
    const {
        isRunning,
        toggleIsRunning,
        generationTime,
        setGenerationTime,
        tilesPresets,
        setTilesPreset,
    } = useGameOfLife();

    return (
        <GameOfLifeControls
            tilesPresets={tilesPresets}
            setTilesPreset={setTilesPreset}
            isRunning={isRunning}
            generationTime={generationTime}
            toggleIsRunning={toggleIsRunning}
            setGenerationTime={setGenerationTime}
        />
    )
}