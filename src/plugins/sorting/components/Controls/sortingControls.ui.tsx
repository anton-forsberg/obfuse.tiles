import React, { FC } from "react";
import { SortingControlsStyle } from "./sortingControls.styled";
import PlayIcon from '@material-ui/icons/PlayArrow';
import StopIcon from '@material-ui/icons/Stop';
import { Select } from "../../../../components/Select";
import { SortingAlgorithm } from "../../store/sorting.types";
import { IconButton } from "../../../../components/IconButton";

interface Props {
    algorithms: SortingAlgorithm[];
    selectedAlgorithm?: SortingAlgorithm;
    setSelectedAlgorithm: (algorithm?: SortingAlgorithm) => void;
    isRunning: boolean;
    toggleIsRunning: () => void;
}

export const SortingControlsUI: FC<Props> = ({
    algorithms,
    selectedAlgorithm,
    setSelectedAlgorithm,
    isRunning,
    toggleIsRunning,
}) => (
    <SortingControlsStyle>
        <Select
            label="Algo"
            value={selectedAlgorithm}
            options={algorithms}
            onChange={setSelectedAlgorithm}
            getValue={algorithm => algorithm.type}
            getLabel={algorithm => algorithm.name}
        />
        <IconButton
            text="Ctrl"
            onClick={toggleIsRunning}
            icon={isRunning
                ? StopIcon
                : PlayIcon
            }
        />
    </SortingControlsStyle>
)
