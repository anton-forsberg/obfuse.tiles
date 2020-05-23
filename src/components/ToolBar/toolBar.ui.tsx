import React, { FC } from "react";
import { ToolBarStyle } from "./toolBar.styled";
import { TileCount } from "../TileCount";
import { ColorSwatch } from "../ColorSwatch";
import { GridValues } from "../../hooks/grid";
import { Input } from "../Input";

interface Props extends GridValues {}

export const ToolBarUI: FC<Props> = ({
    rows,
    setRows,
    columns,
    setColumns,
    scale,
    setScale,
}) => (
    <ToolBarStyle>
        <TileCount />
        <Input
            label="Rows"
            type="number"
            value={rows}
            onChange={setRows}
        />
        <Input
            label="Cols"
            type="number"
            value={columns}
            onChange={setColumns}
        />
        <Input
            label="Scale"
            type="number"
            value={scale}
            onChange={setScale}
            step={0.1}
        />
        <ColorSwatch />
    </ToolBarStyle>
);
