import React, { FC } from "react";
import DeleteIcon from '@material-ui/icons/Delete';
import { IconButton } from "../IconButton";

interface Props {
    clear: () => void;
}

export const GridClearButtonUI: FC<Props> = ({
    clear,
}) => (
    <IconButton
        text="Clear"
        icon={DeleteIcon}
        onClick={clear}
    />
);