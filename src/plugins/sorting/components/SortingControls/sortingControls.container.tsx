import React, { FC } from "react";
import { useSorting } from "../../store/sorting.hooks";
import { SortingControlsUI } from "./sortingControls.ui";

export const SortingControlsContainer: FC = () => {
    const { isRunning, toggleIsRunning, algorithms, selectedAlgorithm, setSelectedAlgorithm } = useSorting();

    return (
        <SortingControlsUI
            isRunning={isRunning}
            algorithms={algorithms}
            selectedAlgorithm={selectedAlgorithm}
            setSelectedAlgorithm={setSelectedAlgorithm}
            toggleIsRunning={toggleIsRunning}
        />
    )
}