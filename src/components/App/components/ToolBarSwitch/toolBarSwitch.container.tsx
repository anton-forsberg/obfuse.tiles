import React, { FC } from "react";
import { useQuery } from "../../../../hooks/media.hooks"
import { ToolBar } from "../../../ToolBar";
import { ToolBarMobile } from "../../../ToolBarMobile";
import { deviceQueries } from "../../../../utils/theme.utils";

export const ToolBarSwitchContainer: FC = () => {
    const isMobile = useQuery(deviceQueries.mobile);

    return isMobile ? (
        <ToolBarMobile />
    ) : (
        <ToolBar />
    );
}