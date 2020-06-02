import { useDispatch, useSelector } from "react-redux";
import { selectPaletteColors } from "../store/palettes/palettes.selectors";
import { AppState } from "../store/reducer";
import { selectSelectedPaletteId } from "../store/selections/selections.selectors";
import { setSelectedPaletteId } from "../store/selections/selections.actions";

export const usePalette = (paletteId: string) => {
    const dispatch = useDispatch();

    return {
        colors: useSelector((state: AppState) => selectPaletteColors(state, paletteId)),
        selected: useSelector(selectSelectedPaletteId) === paletteId,
        setSelected: () => dispatch(setSelectedPaletteId(paletteId))
    };
}