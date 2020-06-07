import React, { FC } from "react";
import { ToolBarMobileStyle, ToolBarMobileOpenStyle, ToolBarMobileExpanderStyle, ToolBarMobileItemStyle } from "./toolBarMobile.style";
import MenuIcon from "@material-ui/icons/Menu";
import CloseIcon from "@material-ui/icons/Close";
import { Plugins } from "../Plugins";
import { PaletteList } from "../PaletteList";
import { PaletteColorList } from "../PaletteColorList";

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
            <ToolBarMobileItemStyle>
                <PaletteList />
                <PaletteColorList />
            </ToolBarMobileItemStyle>
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