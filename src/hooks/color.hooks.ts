import { useDispatch, useSelector } from "react-redux"
import { selectSelectedColorId } from "../store/selections/selections.selectors";
import { setSelectedColorId } from "../store/selections/selections.actions";
import { AppState } from "../store/reducer";
import { selectSelectedPaletteColor } from "../store/palettes/palettes.selectors";
import { useCallback } from "react";

export const useColor = (colorId?: string) => {
    const dispatch = useDispatch();

    return {
        color: useSelector((state: AppState) => selectSelectedPaletteColor(state, colorId)),
        isSelected: useSelector(selectSelectedColorId) === colorId,
        setSelected: useCallback(() => dispatch(setSelectedColorId(colorId)), [dispatch, colorId]),
    };
}