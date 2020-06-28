import React, { FC } from "react";
import { ColorCount } from "../components/ColorCount/controller";
import { ColorCountListStyled } from "./colorCountList.styled";

interface Props {
    colorIds: string[];
}

export const ColorCountListTemplate: FC<Props> = ({
    colorIds
}) => (
    <ColorCountListStyled>
        {colorIds.map(colorId =>
            <ColorCount
                key={colorId}
                colorId={colorId} />)}
    </ColorCountListStyled>
);

