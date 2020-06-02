import React, { FC } from "react";
import { TileCount } from "./components/TileCount";
import { TileCountListStyle } from "./tileCountList.styled";
import { TileColorCount } from "../../../../store/tiles/tiles.types";

interface Props {
    tileColorCounts: TileColorCount[];
}

export const TileCountListUI: FC<Props> = ({
    tileColorCounts
}) => (
    <TileCountListStyle>
        {tileColorCounts.map(colorCount =>
            <TileCount key={colorCount.color} {...colorCount} />)}
    </TileCountListStyle>
);

