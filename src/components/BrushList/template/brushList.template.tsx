import React, { FC } from "react";
import { BrushType } from "../../../utils/brush.utils";
import { BrushListStyled } from "./brushList.styled";
import { Brush } from "../components/Brush/controller";

interface Props {
    brushTypes: BrushType[];
}

export const BrushListTemplate: FC<Props> = ({
    brushTypes,
}) => (
    <BrushListStyled>
        {brushTypes.map(brushType => (
            <Brush
                key={brushType}
                brushType={brushType}
            />
        ))}
    </BrushListStyled>
);
