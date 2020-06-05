import React, { FC } from "react";
import { ToolBarMobileStyle, ToolBarMobileOpenStyle, ToolBarMobileExpanderStyle } from "./toolBarMobile.style";
import MenuIcon from "@material-ui/icons/Menu";
import CloseIcon from "@material-ui/icons/Close";
import { Plugins } from "../Plugins";

interface Props {
    isOpen: boolean;
    isHidden?: boolean;
    toggleIsOpen: () => void;
}

export const ToolBarMobileUI: FC<Props> = ({
    isOpen,
    isHidden,
    toggleIsOpen,
}) => (
    <ToolBarMobileStyle>
        <ToolBarMobileOpenStyle
            isOpen={isOpen}>
            <Plugins />
        </ToolBarMobileOpenStyle>
        <ToolBarMobileExpanderStyle
            isHidden={isHidden}
            onClick={toggleIsOpen}>
            {isOpen
                ? <CloseIcon />
                : <MenuIcon />}
        </ToolBarMobileExpanderStyle>
    </ToolBarMobileStyle>
);