import React, { FC } from "react"
import { ToolBarUI } from "./toolBar.ui"
import { useGridValues } from "../../hooks/grid";

export const ToolBarContainer: FC = () => {
    const { rows, setRows, columns, setColumns, scale, setScale, clear } = useGridValues();

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