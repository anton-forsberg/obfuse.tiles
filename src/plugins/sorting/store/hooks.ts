import { useSelector, useDispatch } from "react-redux";
import { SortingAlgorithmType, SortingAlgorithm } from "./types";
import { toggleIsRunning, setSelectedAlgorithmType } from "./actions";
import { selectIsRunning, selectSelectedAlgorithmType } from "./selectors";

const algorithms: SortingAlgorithm[] = [
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
    const selectedAlgorithm = algorithms.find(({ type }) => type === selectedAlgorithmType);

    return {
        algorithms,
        isRunning: useSelector(selectIsRunning),
        selectedAlgorithm,
        toggleIsRunning: () => dispatch(toggleIsRunning(selectedAlgorithmType)),
        setSelectedAlgorithm: (algorithm?: SortingAlgorithm) => dispatch(setSelectedAlgorithmType(algorithm?.type)),
    };
}