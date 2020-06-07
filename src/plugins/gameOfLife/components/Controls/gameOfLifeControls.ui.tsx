import React, { FC } from "react";
import { GameOfLifeControlsStyle } from "./gameOfLifeControls.styled";
import PlayIcon from '@material-ui/icons/PlayArrow';
import PauseIcon from '@material-ui/icons/Pause';
import { Input } from "../../../../components/Input";
import { GameOfLifeBindings } from "../../store/gameOfLife.hooks";
import { Select } from "../../../../components/Select";
import { IconButton } from "../../../../components/IconButton";

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
        <IconButton
            text="Ctrl"
            onClick={toggleIsRunning}
            icon={isRunning
                ? PauseIcon
                : PlayIcon
            }
        />
    </GameOfLifeControlsStyle>
);
