import React, { FC } from "react";
import { ToolBarMobileStyled, ToolBarMobileOpenStyled, ToolBarMobileExpanderStyled, ToolBarMobileItemStyled } from "./toolBarMobile.styled";
import MenuIcon from "@material-ui/icons/Menu";
import CloseIcon from "@material-ui/icons/Close";
import { Plugins } from "../../Plugins/controller";
import { PaletteList } from "../../PaletteList/controller";
import { PaletteColorList } from "../../PaletteColorList/controller";
import { BrushList } from "../../BrushList/controller";
import { GridClearButton } from "../../GridClearButton/controller";
import { Eraser } from "../../Eraser/controller";

interface Props {
    isOpen: boolean;
    isHidden?: boolean;
    toggleIsOpen: () => void;
}

export const ToolBarMobileTemplate: FC<Props> = ({
    isOpen,
    isHidden,
    toggleIsOpen,
}) => (
    <ToolBarMobileStyled>
        <ToolBarMobileOpenStyled
            isOpen={isOpen}>
            <Plugins />
            <ToolBarMobileItemStyled>
                <GridClearButton />
                <Eraser />
                <BrushList />
            </ToolBarMobileItemStyled>
            <ToolBarMobileItemStyled>
                <PaletteList />
                <PaletteColorList />
            </ToolBarMobileItemStyled>
        </ToolBarMobileOpenStyled>
        <ToolBarMobileExpanderStyled
            isHidden={isHidden}
            onClick={toggleIsOpen}>
            {isOpen
                ? <CloseIcon />
                : <MenuIcon />}
        </ToolBarMobileExpanderStyled>
    </ToolBarMobileStyled>
);