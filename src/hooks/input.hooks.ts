import { Dictionary } from "../utils/types.utils";
import { mouseEvent } from "../utils/pointer.utils";
import { useCallback } from "react";

type InputActions = Dictionary<() => void>;

export const useInput = (actions: InputActions) => {
    const inputHandler = useCallback(mouseEvent(({ mouseButton }) => {
        if (actions[mouseButton]) return actions[mouseButton]();
    }), [])

    return { inputHandler };
}