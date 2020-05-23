import { useDispatch, useSelector } from "react-redux"
import { selectSelectedColorId } from "../store/selections/selectors";
import { setSelectedColorId } from "../store/selections/actions";

export const useColor = (colorId: string) => {
    const dispatch = useDispatch();
    const selectedColorId = useSelector(selectSelectedColorId);

    return {
        setSelectedColor: () => dispatch(setSelectedColorId(colorId)),
        selected: selectedColorId === colorId,
    };
}