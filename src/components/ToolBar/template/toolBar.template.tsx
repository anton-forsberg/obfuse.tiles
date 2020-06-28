import React, { FC } from "react";
import { ToolBarStyled } from "./toolBar.styled";
import { ColorCountList } from "../components/ColorCountList/controller";
import { PaletteColorList } from "../../PaletteColorList/controller";
import { PaletteList } from "../../PaletteList/controller";
import { GridConfigurations } from "../../../hooks/grid.hooks";
import { Input } from "../../Input/controller";
import { Plugins } from "../../Plugins/controller";
import ReplayIcon from '@material-ui/icons/Replay';
import { BrushList } from "../../BrushList/controller";
import { GridClearButton } from "../../GridClearButton/controller";
import { IconButton } from "../../IconButton/template";

interface Props extends GridConfigurations {}

export const ToolBarTemplate: FC<Props> = ({
    rows,
    setRows,
    columns,
    setColumns,
    scale,
    setScale,
    reset,
}) => (
    <ToolBarStyled>
        <ColorCountList />
        <GridClearButton />
        <IconButton
            text="Reset"
            onClick={reset}
            icon={ReplayIcon}
        />
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
        <BrushList />
        <PaletteList />
        <PaletteColorList />
    </ToolBarStyled>
);
