import React, { FC } from "react";
import { GameOfLifeControlsStyle } from "./gameOfLifeControls.styled";
import PlayIcon from '@material-ui/icons/PlayArrow';
import PauseIcon from '@material-ui/icons/Pause';
import { Label } from "../../../../components/Label";
import { Input } from "../../../../components/Input";

interface Props {
    isRunning: boolean;
    generationTime: number;
    toggleIsRunning: () => void;
    setGenerationTime: (value: number) => void;
}

export const GameOfLifeControlsUI: FC<Props> = ({
    isRunning,
    generationTime,
    toggleIsRunning,
    setGenerationTime,
}) => (
    <GameOfLifeControlsStyle>
        <Label text="Ctrl" />
        {isRunning
            ? <PauseIcon onClick={toggleIsRunning} />
            : <PlayIcon onClick={toggleIsRunning} />}
        <Input
            label="Time"
            type="number"
            value={generationTime}
            onChange={setGenerationTime}
        />
    </GameOfLifeControlsStyle>
);
