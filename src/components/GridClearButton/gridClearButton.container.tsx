import React, { FC } from "react";
import { useDispatch } from "react-redux";
import { setAllTiles } from "../../store/tiles/tiles.actions";
import { GridClearButtonUI } from "./gridClearButton.ui";

export const GridClearButtonContainer: FC = () => {
    const dispatch = useDispatch();

    return (
        <GridClearButtonUI
            clear={() => dispatch(setAllTiles())}
        />
    );
}