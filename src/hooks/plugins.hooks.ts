import { Plugin } from "../utils/types.utils";
import { useDispatch, useSelector } from "react-redux";
import { selectSelectedPluginId } from "../store/selections/selections.selectors";
import { setSelectedPluginId } from "../store/selections/selections.actions";
import { useCallback } from "react";

export const usePlugins = (plugins: Plugin[]) => {
    const dispatch = useDispatch();
    const selectedPluginId = useSelector(selectSelectedPluginId);
    const selectedPlugin = plugins.find(({ id }) => id === selectedPluginId);

    return {
        selectedPlugin,
        setSelectedPlugin: useCallback((plugin?: Plugin) => dispatch(setSelectedPluginId(plugin?.id)), [dispatch]),
    }
}