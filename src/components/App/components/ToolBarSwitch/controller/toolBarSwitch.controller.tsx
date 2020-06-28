import React, { FC } from "react";
import { useQuery } from "../../../../../hooks/media.hooks"
import { ToolBar } from "../../../../ToolBar/controller";
import { ToolBarMobile } from "../../../../ToolBarMobile/controller";
import { deviceQueries } from "../../../../../utils/theme.utils";

export const ToolBarSwitchController: FC = () => {
    const isMobile = useQuery(deviceQueries.mobile);

    return isMobile ? (
        <ToolBarMobile />
    ) : (
        <ToolBar />
    );
}