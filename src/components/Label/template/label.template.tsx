import React, { FC } from "react";
import { LabelStyled } from "./label.styled";

interface Props {
    text?: string;
}

export const LabelTemplate: FC<Props> = ({
    text,
}) => text ? (
    <LabelStyled>
        {text}
    </LabelStyled>
) : null;