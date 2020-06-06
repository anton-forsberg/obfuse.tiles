import React, { FC } from "react";
import { TileUI } from "../../../../../Tile";
import { TileCountStyle } from "./tileCount.styled";

interface Props {
    color: string;
    count: number;
}

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
