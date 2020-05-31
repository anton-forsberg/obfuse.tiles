import React, { FC } from "react";
import { SortingControlsStyle } from "./sortingControls.styled";
import PlayIcon from '@material-ui/icons/PlayArrow';
import BlockIcon from '@material-ui/icons/Block';
import { Label } from "../../../../components/Label";
import { Select } from "../../../../components/Select";
import { SortingAlgorithm } from "../../store/types";

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
        <Label text="Ctrl" />
        {isRunning
            ? <BlockIcon/>
            : <PlayIcon onClick={toggleIsRunning} />}
    </SortingControlsStyle>
)
