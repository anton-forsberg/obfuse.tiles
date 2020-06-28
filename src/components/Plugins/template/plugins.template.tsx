import React, { FC, Suspense } from "react";
import { PluginsStyled } from "./plugins.styled";
import { Select } from "../../Select/controller";
import { Plugin } from "../../../utils/types.utils";

interface Props {
    plugins: Plugin[];
    selectedPlugin?: Plugin;
    setSelectedPlugin: (plugin?: Plugin) => void;
}

export const PluginsTemplate: FC<Props> = ({
    plugins,
    selectedPlugin,
    setSelectedPlugin,
}) => (
    <PluginsStyled>
        <Select
            label="Plgn"
            placeholder="None"
            value={selectedPlugin}
            onChange={setSelectedPlugin}
            options={plugins}
            getValue={plugin => plugin.id}
            getLabel={plugin => plugin.name}
        />
        {selectedPlugin && (
            <Suspense fallback="">
                <selectedPlugin.component />
            </Suspense>
        )}
    </PluginsStyled>
);