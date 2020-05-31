import { Plugin } from "../utils/types";
import { useDispatch, useSelector } from "react-redux";
import { selectSelectedPluginId } from "../store/selections/selectors";
import { setSelectedPluginId } from "../store/selections/actions";

export const usePlugins = (plugins: Plugin[]) => {
    const dispatch = useDispatch();
    const selectedPluginId = useSelector(selectSelectedPluginId);
    const selectedPlugin = plugins.find(({ id }) => id === selectedPluginId);

    return {
        selectedPlugin,
        setSelectedPlugin: (plugin?: Plugin) => dispatch(setSelectedPluginId(plugin?.id)),
    }
}