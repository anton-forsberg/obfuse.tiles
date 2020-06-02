import React, { FC } from "react";
import { GameOfLifeControlsStyle } from "./gameOfLifeControls.styled";
import PlayIcon from '@material-ui/icons/PlayArrow';
import PauseIcon from '@material-ui/icons/Pause';
import { Label } from "../../../../components/Label";
import { Input } from "../../../../components/Input";
import { GameOfLifeBindings } from "../../store/gameOfLife.hooks";
import { Select } from "../../../../components/Select";

interface Props extends GameOfLifeBindings {}

export const GameOfLifeControlsUI: FC<Props> = ({
    isRunning,
    generationTime,
    toggleIsRunning,
    setGenerationTime,
    tilesPresets,
    setTilesPreset,
}) => (
    <GameOfLifeControlsStyle>
        <Label text="Ctrl" />
        {isRunning
            ? <PauseIcon onClick={toggleIsRunning} />
            : <PlayIcon onClick={toggleIsRunning} />}
        <Input
            label="Time"
            type="number"
            step={20}
            value={generationTime}
            onChange={setGenerationTime}
        />
        <Select
            label="Ptrn"
            placeholder="Preset"
            options={tilesPresets}
            onChange={setTilesPreset}
            getValue={preset => preset.id}
            getLabel={preset => preset.name}
        />
    </GameOfLifeControlsStyle>
);
