import React, { FC, useState, useEffect } from "react"
import { ToolBarMobileUI } from "./toolBarMobile.ui";
import { useSelector } from "react-redux";
import { selectIsRunning as selectIsGameOfLifeRunning } from "../../plugins/gameOfLife/store/gameOfLife.selectors";
import { selectIsRunning as selectIsSortingRunning } from "../../plugins/sorting/store/sorting.selectors";

export const ToolBarMobileContainer: FC = () => {
    const [ isOpen, setIsOpen ] = useState(false);
    const isGameOfLifeRunning = useSelector(selectIsGameOfLifeRunning);
    const isSortingRunning = useSelector(selectIsSortingRunning)
    const pluginRunning = isGameOfLifeRunning || isSortingRunning;

    useEffect(() => {
        if (pluginRunning) setIsOpen(false);
    }, [pluginRunning])

    return (
        <ToolBarMobileUI
            isOpen={isOpen}
            isHidden={pluginRunning && !isOpen}
            toggleIsOpen={() => setIsOpen(!isOpen)}
        />
    );
}