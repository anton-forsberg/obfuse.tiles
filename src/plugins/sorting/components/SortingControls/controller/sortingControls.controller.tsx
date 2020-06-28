import React, { FC } from "react";
import { useSorting } from "../../../store/sorting.hooks";
import { SortingControls } from "../template";

export const SortingControlsController: FC = () => {
    const { isRunning, toggleIsRunning, algorithms, selectedAlgorithm, setSelectedAlgorithm } = useSorting();

    return (
        <SortingControls
            isRunning={isRunning}
            algorithms={algorithms}
            selectedAlgorithm={selectedAlgorithm}
            setSelectedAlgorithm={setSelectedAlgorithm}
            toggleIsRunning={toggleIsRunning}
        />
    )
}