import React, { FC } from "react"
import { ToolBarUI } from "./toolBar.ui"
import { useGridConfigurations } from "../../hooks/grid.hooks";

export const ToolBarContainer: FC = () => {
    const { rows, setRows, columns, setColumns, scale, setScale, clear } = useGridConfigurations();

    return (
        <ToolBarUI
            rows={rows}
            setRows={setRows}
            columns={columns}
            setColumns={setColumns}
            scale={scale}
            setScale={setScale}
            clear={clear}
        />
    )
}