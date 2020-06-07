import React, { FC } from "react";
import { TileUI } from "../../../../../Tile";
import { ColorCountStyle } from "./colorCount.styled";

interface Props {
    color: string;
    count: number;
}

export const ColorCountUI: FC<Props> = ({
    color,
    count
}) => (
    <ColorCountStyle
        color={color}>
        <TileUI color={color} size={40}/>
        <span>{count}</span>
    </ColorCountStyle>
);
