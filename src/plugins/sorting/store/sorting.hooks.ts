import { useSelector, useDispatch } from "react-redux";
import { SortingAlgorithmType, SortingAlgorithm } from "./sorting.types";
import { toggleIsRunning, setSelectedAlgorithmType } from "./sorting.actions";
import { selectIsRunning, selectSelectedAlgorithmType } from "./sorting.selectors";
import { useCallback } from "react";

const ALGORITHMS: SortingAlgorithm[] = [
    {
        name: "Quick sort",
        type: SortingAlgorithmType.QuickSort,
    },
    {
        name: "Merge sort",
        type: SortingAlgorithmType.MergeSort,
    }
]

export const useSorting = () => {
    const dispatch = useDispatch();
    const selectedAlgorithmType = useSelector(selectSelectedAlgorithmType);
    const selectedAlgorithm = ALGORITHMS.find(({ type }) => type === selectedAlgorithmType);

    return {
        algorithms: ALGORITHMS,
        isRunning: useSelector(selectIsRunning),
        selectedAlgorithm,
        toggleIsRunning: useCallback(() => dispatch(toggleIsRunning(selectedAlgorithmType)), [dispatch, selectedAlgorithmType]),
        setSelectedAlgorithm: useCallback((algorithm?: SortingAlgorithm) => dispatch(setSelectedAlgorithmType(algorithm?.type)), [dispatch]),
    };
}