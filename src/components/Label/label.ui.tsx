import React, { FC } from "react";
import { LabelStyle } from "./label.styled";

interface Props {
    text?: string;
}

export const LabelUI: FC<Props> = ({
    text,
}) => text ? (
    <LabelStyle>
        {text}
    </LabelStyle>
) : null;