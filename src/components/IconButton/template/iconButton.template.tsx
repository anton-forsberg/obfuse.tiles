import React, { FC } from "react";
import { Label } from "../../Label/template";
import { IconButtonStyled } from "./iconButton.styled";
import SvgIcon from '@material-ui/core/SvgIcon';

interface Props {
    text: string;
    onClick: () => void;
    icon: typeof SvgIcon;
    isActive?: boolean;
}

export const IconButtonTemplate: FC<Props> = ({
    text,
    onClick,
    icon: Icon,
    isActive,
}) => (
    <IconButtonStyled
        isActive={isActive}
        onClick={onClick}
    >
        <Label text={text}/>
        <Icon />
    </IconButtonStyled>
);