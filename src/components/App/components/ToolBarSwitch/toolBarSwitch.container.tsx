import React, { FC } from "react";
import { useDeviceType } from "../../../../hooks/media.hooks"
import { ToolBar } from "../../../ToolBar";
import { ToolBarMobile } from "../../../ToolBarMobile";

export const ToolBarSwitchContainer: FC = () => {
    const { isMobile } = useDeviceType();

    return isMobile ? (
        <ToolBarMobile />
    ) : (
        <ToolBar />
    );
}