import { useSelector, useDispatch } from "react-redux";
import { SortingAlgorithm } from "./types";
import { toggleIsRunning } from "./actions";
import { selectIsRunning } from "./selectors";

export const useSorting = () => {
    const dispatch = useDispatch();

    return {
        isRunning: useSelector(selectIsRunning),
        toggleIsRunning: (algorithm: SortingAlgorithm) => dispatch(toggleIsRunning(algorithm)),
    };
}