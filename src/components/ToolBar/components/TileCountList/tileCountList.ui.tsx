import React, { FC } from "react";
import { TileCount } from "./components/TileCount";
import { TileCountListStyle } from "./tileCountList.styled";

interface Props {
    colorIds: string[];
}

export const TileCountListUI: FC<Props> = ({
    colorIds
}) => (
    <TileCountListStyle>
        {colorIds.map(colorId =>
            <TileCount
                key={colorId}
                colorId={colorId} />)}
    </TileCountListStyle>
);

