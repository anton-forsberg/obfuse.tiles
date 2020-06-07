import React, { FC } from "react";
import { Label } from "../Label";
import { IconButtonStyle } from "./iconButton.style";
import SvgIcon from '@material-ui/core/SvgIcon';

interface Props {
    text: string;
    onClick: () => void;
    icon: typeof SvgIcon;
    isActive?: boolean;
}

export const IconButtonUI: FC<Props> = ({
    text,
    onClick,
    icon: Icon,
    isActive,
}) => (
    <IconButtonStyle
        isActive={isActive}
        onClick={onClick}
    >
        <Label text={text}/>
        <Icon />
    </IconButtonStyle>
);