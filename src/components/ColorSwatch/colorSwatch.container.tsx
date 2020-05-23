import React, { FC } from "react";
import { useSelector } from "react-redux";
import { selectColors } from "../../store/colors/selectors";
import { ColorSwatchUI } from './colorSwatch.ui';

export const ColorSwatchContainer: FC = () => {
    const colors = useSelector(selectColors);

    return (
        <ColorSwatchUI
            colors={colors}
        />
    );
}