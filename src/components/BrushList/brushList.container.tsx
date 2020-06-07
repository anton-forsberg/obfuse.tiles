import React, { FC } from "react";
import { getBrushTypes } from "../../utils/brush.utils"
import { BrushListUI } from "./brushList.ui";

export const BrushListContainer: FC = () => {
    const brushTypes = getBrushTypes();

    return (
        <BrushListUI
            brushTypes={brushTypes}
        />
    );
}