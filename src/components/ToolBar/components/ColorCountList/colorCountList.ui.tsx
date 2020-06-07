import React, { FC } from "react";
import { ColorCount } from "./components/ColorCount";
import { ColorCountListStyle } from "./colorCountList.styled";

interface Props {
    colorIds: string[];
}

export const ColorCountListUI: FC<Props> = ({
    colorIds
}) => (
    <ColorCountListStyle>
        {colorIds.map(colorId =>
            <ColorCount
                key={colorId}
                colorId={colorId} />)}
    </ColorCountListStyle>
);

