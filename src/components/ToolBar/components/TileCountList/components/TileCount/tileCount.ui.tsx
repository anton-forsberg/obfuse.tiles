import React, { FC } from "react";
import { TileUI } from "../../../../../Tile";
import { TileCountStyle } from "./tileCount.styled";
import { TileColorCount } from "../../../../../../store/tiles/tiles.types";

interface Props extends TileColorCount {}

export const TileCountUI: FC<Props> = ({
    color,
    count
}) => (
    <TileCountStyle
        color={color}>
        <TileUI color={color} size={40}/>
        <span>{count}</span>
    </TileCountStyle>
);
