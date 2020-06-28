import React, { FC } from "react";
import { SortingControlsStyled } from "./sortingControls.styled";
import PlayIcon from '@material-ui/icons/PlayArrow';
import StopIcon from '@material-ui/icons/Stop';
import { Select } from "../../../../../components/Select/controller";
import { SortingAlgorithm } from "../../../store/sorting.types";
import { IconButton } from "../../../../../components/IconButton/template";

interface Props {
    algorithms: SortingAlgorithm[];
    selectedAlgorithm?: SortingAlgorithm;
    setSelectedAlgorithm: (algorithm?: SortingAlgorithm) => void;
    isRunning: boolean;
    toggleIsRunning: () => void;
}

export const SortingControlsTemplate: FC<Props> = ({
    algorithms,
    selectedAlgorithm,
    setSelectedAlgorithm,
    isRunning,
    toggleIsRunning,
}) => (
    <SortingControlsStyled>
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
    </SortingControlsStyled>
)
