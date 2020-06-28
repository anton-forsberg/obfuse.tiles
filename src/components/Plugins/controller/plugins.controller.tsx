import React, { FC } from 'react';
import { Plugins } from '../template';
import { Plugin } from '../../../utils/types.utils';
import { usePlugins } from '../../../hooks/plugins.hooks';

const plugins: Plugin[] = [
    {
        name: "Game of Life",
        id: "game-of-life",
        component: React.lazy(() =>
            import('../../../plugins/gameOfLife/components/GameOfLifeControls/controller')
            .then(({ GameOfLifeControls }) => ({ default: GameOfLifeControls }))
        )
    },
    {
        name: "Sorting",
        id: "sorting",
        component: React.lazy(() =>
        import('../../../plugins/sorting/components/SortingControls/controller')
            .then(({ SortingControls }) => ({ default: SortingControls }))
        )
    }
];

export const PluginsController: FC = () => {
    const { selectedPlugin, setSelectedPlugin } = usePlugins(plugins);

    return (
        <Plugins
            plugins={plugins}
            selectedPlugin={selectedPlugin}
            setSelectedPlugin={setSelectedPlugin}
        />
    );
}