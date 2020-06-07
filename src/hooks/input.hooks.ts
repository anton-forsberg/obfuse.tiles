import { Dictionary } from "../utils/types.utils";
import { mouseEvent, onTouchEnter } from "../utils/input.utils";
import { useCallback, RefObject, useRef, useEffect } from "react";

type InputActions = Dictionary<() => void>;

export const useInput = (actions: InputActions) => {
    const inputHandler = useCallback(mouseEvent(({ mouseButton }) => {
        const action = actions[mouseButton];
        if (action) return action();
    }), [])

    return { inputHandler };
}

export const useTouchEnter = <T extends Element>(callback: () => void): RefObject<T> => {
    const ref = useRef<T>(null);
    useEffect(() => onTouchEnter(ref.current, callback), [ref, callback]);
    return ref;
}
