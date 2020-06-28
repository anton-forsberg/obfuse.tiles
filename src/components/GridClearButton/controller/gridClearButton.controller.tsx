import React, { FC } from "react";
import { useDispatch } from "react-redux";
import { setAllTiles } from "../../../store/tiles/tiles.actions";
import { GridClearButton } from "../template";

export const GridClearButtonController: FC = () => {
    const dispatch = useDispatch();

    return (
        <GridClearButton
            clear={() => dispatch(setAllTiles())}
        />
    );
}