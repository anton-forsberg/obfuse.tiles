import { useSelector, useDispatch } from "react-redux";
import { SortingAlgorithmType, SortingAlgorithm } from "./sorting.types";
import { toggleIsRunning, setSelectedAlgorithmType } from "./sorting.actions";
import { selectIsRunning, selectSelectedAlgorithmType } from "./sorting.selectors";

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