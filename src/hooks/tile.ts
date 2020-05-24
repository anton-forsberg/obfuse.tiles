import { AppState } from '../store/index';
import { selectSelectedColorId, selectSelectedTileSize } from '../store/selections/selectors';
import { setTile } from '../store/tiles/actions';
import { selectTileColor } from '../store/tiles/selectors';
import { useDispatch, useSelector } from 'react-redux';

export const useTile = (row: number, column: number) => {
    const dispatch = useDispatch();
    /**
     * The following line causes every tile to rerender when changing selectedColorId.
     * There are two ways to solve this:
     * 
     * 1. Remove this from the `useTile` hook and instead read it from the state directly when dispatching `setTile` using redux-saga
     *      Pros: Allows the use of such hooks in the container of the component where it makes sense syntaxically.
     *      Cons: Adds a requirement to use redux middleware even where there are no asynchronous operations.
     * 
     * 2. ~Move all or some of the logic in this hook to a new hook (e.g. `useTiles`) to be used in the `Grid` component, instead of keeping it in the listed item component.
     *      Pros: Removes the requirement of redux middleware.
     *      Const: Places limitations on in which components hooks can/should be used.~
     * 
     * #2 doesn't solve the problem since if the list component (`Grid`) re-renders, all child components will be re-rendered as well.
     * Thus #1 is the only solution.
     */
    const selectedColorId = useSelector(selectSelectedColorId);
    const color = useSelector((state: AppState) => selectTileColor(state, row, column));
    const size = useSelector(selectSelectedTileSize);

    const fillTile = () => dispatch(setTile(row, column, selectedColorId));
    const clearTile = () => dispatch(setTile(row, column));

    return {
        color,
        size,
        fillTile,
        clearTile,
    };
}

// export const useTiles = () => {
//     const dispatch = useDispatch();

//     const selectedColorId = useSelector(selectSelectedColorId);

//     const fillTile = (row: number, column: number) => dispatch(setTile(row, column, selectedColorId));
//     const clearTile = (row: number, column: number) => dispatch(setTile(row, column));

//     return {
//         fillTile,
//         clearTile,
//     };
// }