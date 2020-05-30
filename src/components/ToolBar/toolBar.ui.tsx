import React, { FC } from "react";
import { ToolBarStyle } from "./toolBar.styled";
import { TileCountList } from "./components/TileCountList";
import { ColorSwatch } from "./components/ColorSwatch";
import { PaletteList } from "./components/PaletteList";
import { GridValues } from "../../hooks/grid";
import { Input } from "../Input";
import { Plugins } from "./components/Plugins";
import ClearIcon from '@material-ui/icons/Delete';
import { Label } from "../Label";

interface Props extends GridValues {}

export const ToolBarUI: FC<Props> = ({
    rows,
    setRows,
    columns,
    setColumns,
    scale,
    setScale,
    clear,
}) => (
    <ToolBarStyle>
        <TileCountList />
        <Label text="Clear" />
        <ClearIcon onClick={clear} />
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
        <Plugins />
        <PaletteList />
        <ColorSwatch />
    </ToolBarStyle>
);
