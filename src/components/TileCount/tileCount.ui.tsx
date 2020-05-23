import React, { FC } from "react";
import { ColorCount } from '../../store/colors/types';
import { TileCountTile } from "./components/TileCountTile";
import { TileCountStyle } from "./tileCount.styled";

interface Props {
    colorCounts: ColorCount[];
}

export const TileCountUI: FC<Props> = ({
    colorCounts
}) => (
    <TileCountStyle>
        {colorCounts.map(TileCountTile)}
    </TileCountStyle>
);

