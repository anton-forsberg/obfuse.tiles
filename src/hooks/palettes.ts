import { useDispatch, useSelector } from "react-redux";
import { selectPaletteColors } from "../store/palettes/selectors";
import { AppState } from "../store";
import { selectSelectedPaletteId } from "../store/selections/selectors";
import { setSelectedPaletteId } from "../store/selections/actions";

export const usePalette = (paletteId: string) => {
    const dispatch = useDispatch();

    return {
        colors: useSelector((state: AppState) => selectPaletteColors(state, paletteId)),
        selected: useSelector(selectSelectedPaletteId) === paletteId,
        setSelected: () => dispatch(setSelectedPaletteId(paletteId))
    };
}