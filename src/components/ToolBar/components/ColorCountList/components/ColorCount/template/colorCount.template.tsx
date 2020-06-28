import React, { FC } from "react";
import { Tile } from "../../../../../../Tile/template";
import { ColorCountStyled } from "./colorCount.styled";

interface Props {
    color: string;
    count: number;
}

export const ColorCountTemplate: FC<Props> = ({
    color,
    count
}) => (
    <ColorCountStyled
        color={color}>
        <Tile color={color} size={40}/>
        <span>{count}</span>
    </ColorCountStyled>
);
