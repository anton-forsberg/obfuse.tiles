import React, { FC } from "react";
import DeleteIcon from '@material-ui/icons/Delete';
import { IconButton } from "../../IconButton/template";

interface Props {
    clear: () => void;
}

export const GridClearButtonTemplate: FC<Props> = ({
    clear,
}) => (
    <IconButton
        text="Clear"
        icon={DeleteIcon}
        onClick={clear}
    />
);