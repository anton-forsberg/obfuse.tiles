import { useSelector, useDispatch } from "react-redux";
import { selectIsRunning, selectGenerationTime } from "./selectors";
import { toggleIsRunning, setGenerationTime } from './actions';

export const useGameOfLife = () => {
    const dispatch = useDispatch();

    return {
        isRunning: useSelector(selectIsRunning),
        generationTime: useSelector(selectGenerationTime),
        toggleIsRunning: () => dispatch(toggleIsRunning()),
        setGenerationTime: (value: number) => dispatch(setGenerationTime(value)),
    };
};