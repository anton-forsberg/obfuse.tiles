import React, { FC } from "react";
import { useSorting } from "../../store/hooks";
import { SortingControlsUI } from "./sortingControls.ui";
import { SortingAlgorithm } from "../../store/types";

export const SortingControlsContainer: FC = () => {
    const { isRunning, toggleIsRunning } = useSorting();

    return (
        <SortingControlsUI
            isRunning={isRunning}
            toggleIsRunning={() => toggleIsRunning(SortingAlgorithm.QuickSort)}
        />
    )
}