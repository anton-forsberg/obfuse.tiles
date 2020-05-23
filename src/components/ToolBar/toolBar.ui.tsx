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
        <Input<number> value={rows} onChange={setRows} />
        <ColorSwatch />
    </ToolBarStyle>
);
