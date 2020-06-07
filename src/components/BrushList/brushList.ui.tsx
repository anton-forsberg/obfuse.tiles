import React, { FC } from "react";
import { BrushType } from "../../utils/brush.utils";
import { BrushListStyle } from "./brushList.style";
import { Brush } from "./components/Brush";

interface Props {
    brushTypes: BrushType[];
}

export const BrushListUI: FC<Props> = ({
    brushTypes,
}) => (
    <BrushListStyle>
        {brushTypes.map(brushType => (
            <Brush
                key={brushType}
                brushType={brushType}
            />
        ))}
    </BrushListStyle>
);
