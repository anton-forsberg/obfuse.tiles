import React, { FC } from "react";
import { ColorCount } from "../../../../store/colors/types";
import { TileUI } from "../../../Tile";
import { TileCountTileStyle } from "./tileCountTile.styled";

interface Props extends ColorCount {}

export const TileCountTileUI: FC<Props> = ({
    color,
    count
}) => (
    <TileCountTileStyle>
        <TileUI color={color} size={40}/>
        <span>{count}</span>
    </TileCountTileStyle>
);
