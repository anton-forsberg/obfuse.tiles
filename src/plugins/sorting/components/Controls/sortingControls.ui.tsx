import React, { FC } from "react";
import { SortingControlsStyle } from "./sortingControls.styled";
import PlayIcon from '@material-ui/icons/PlayArrow';
import PauseIcon from '@material-ui/icons/Pause';
import { Label } from "../../../../components/Label";

interface Props {
    isRunning: boolean;
    toggleIsRunning: () => void;
}

export const SortingControlsUI: FC<Props> = ({
    isRunning,
    toggleIsRunning,
}) => (
    <SortingControlsStyle>
        <Label text="Ctrl" />
        {isRunning
            ? <PauseIcon onClick={toggleIsRunning} />
            : <PlayIcon onClick={toggleIsRunning} />}
    </SortingControlsStyle>
)
