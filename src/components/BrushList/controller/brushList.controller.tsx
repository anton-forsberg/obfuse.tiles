import React, { FC } from "react";
import { getBrushTypes } from "../../../utils/brush.utils"
import { BrushList } from "../template";

export const BrushListController: FC = () => {
    const brushTypes = getBrushTypes();

    return (
        <BrushList
            brushTypes={brushTypes}
        />
    );
}