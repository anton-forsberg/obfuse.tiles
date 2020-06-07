import { BrushType, brushes } from "../utils/brush.utils";
import { useState, useEffect, useCallback } from "react";
import { getArrayOfLength } from "../utils/array.utils";
import { TilePosition } from "../store/tiles/tiles.types";
import { useSelector, useDispatch } from "react-redux";
import { selectSelectedBrush } from "../store/selections/selections.selectors";
import { setSelectedBrush } from "../store/selections/selections.actions";

export const useBrush = (brushType: BrushType) => {
    const [ brushTiles, setBrushTiles ] = useState<TilePosition[]>([]);
    const [ columns, setColumns ] = useState(0);
    const [ rows, setRows ] = useState(0);

    useEffect(() => {
        const _brushTiles = brushes[brushType]();

        const minColumn = _brushTiles.reduce((min, { column }) => Math.min(min, column), 0);
        const maxColumn = _brushTiles.reduce((max, { column }) => Math.max(max, column), 0);
        const minRow = _brushTiles.reduce((min, { row }) => Math.min(min, row), 0);
        const maxRow = _brushTiles.reduce((max, { row }) => Math.max(max, row), 0);

        const _columns = getArrayOfLength(Math.abs(minColumn - maxColumn) + 1);
        const _rows = getArrayOfLength(Math.abs(minRow - maxRow) + 1);
        const columnCount = _columns.length;
        const rowCount = _rows.length;
        const columnCenter = Math.floor(columnCount / 2);
        const rowCenter = Math.floor(rowCount / 2);

        setBrushTiles(brushes[brushType](columnCenter, rowCenter));
        setColumns(columnCount);
        setRows(rowCount);
    }, [brushType]);

    const isSelected = useSelector(selectSelectedBrush) === brushType;
    const dispatch = useDispatch();
    const setSelected = useCallback(() => dispatch(setSelectedBrush(brushType)), [dispatch, brushType]);


    return { brushTiles, columns, rows, isSelected, setSelected };
}

export type BrushData = ReturnType<typeof useBrush>;