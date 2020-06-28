import React, { FC } from "react";
import Backspace from '@material-ui/icons/Backspace';
import { IconButton } from "../../IconButton/template";

interface Props {
    onClick: () => void;
    isSelected: boolean;
}

export const EraserTemplate: FC<Props> = ({
    onClick,
    isSelected,
}) => (
    <IconButton
        text="Erase"
        icon={Backspace}
        onClick={onClick}
        isActive={isSelected}
    />
)