import React, { FC } from "react";
import { ToolBarStyle } from "./toolBar.styled";
import { TileCountList } from "./components/TileCountList";
import { ColorSwatch } from "./components/ColorSwatch";
import { PaletteList } from "./components/PaletteList";
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
        <TileCountList />
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
            step={0.05}
        />
        <PaletteList />
        <ColorSwatch />
    </ToolBarStyle>
);
