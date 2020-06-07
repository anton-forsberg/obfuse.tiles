import React, { FC } from "react";
import Backspace from '@material-ui/icons/Backspace';
import { IconButton } from "../IconButton";

interface Props {
    onClick: () => void;
    isSelected: boolean;
}

export const EraserUI: FC<Props> = ({
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