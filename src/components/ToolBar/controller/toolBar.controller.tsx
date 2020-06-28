import React, { FC } from "react"
import { ToolBar } from "../template"
import { useGridConfigurations } from "../../../hooks/grid.hooks";

export const ToolBarController: FC = () => {
    const { rows, setRows, columns, setColumns, scale, setScale, clear, reset } = useGridConfigurations();

    return (
        <ToolBar
            rows={rows}
            setRows={setRows}
            columns={columns}
            setColumns={setColumns}
            scale={scale}
            setScale={setScale}
            clear={clear}
            reset={reset}
        />
    );
}