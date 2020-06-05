import React, { FC } from 'react';
import { PluginsUI } from './plugins.ui';
import { Plugin } from '../../utils/types.utils';
import { usePlugins } from '../../hooks/plugins.hooks';

const plugins: Plugin[] = [
    {
        name: "Game of Life",
        id: "game-of-life",
        component: React.lazy(() => import('../../plugins/gameOfLife/components/Controls'))
    },
    {
        name: "Sorting",
        id: "sorting",
        component: React.lazy(() => import('../../plugins/sorting/components/Controls'))
    }
];

export const PluginsContainer: FC = () => {
    const { selectedPlugin, setSelectedPlugin } = usePlugins(plugins);

    return (
        <PluginsUI
            plugins={plugins}
            selectedPlugin={selectedPlugin}
            setSelectedPlugin={setSelectedPlugin}
        />
    );
}