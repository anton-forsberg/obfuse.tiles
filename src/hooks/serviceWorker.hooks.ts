import { useState, useEffect, useCallback } from 'react';
import * as serviceWorker from '../serviceWorker';

/**
 * If you want your app to work offline and load faster, you can set
 * `ENABLE_SERVICE_WORKER` to `true` below. Note this comes with some pitfalls.
 * Learn more about service workers: https://bit.ly/CRA-PWA
 */
const ENABLE_SERVICE_WORKER = true;
const SERVICE_WORKER_SKIP_WAITING = 'SKIP_WAITING';

export const useServiceWorker = () => {
    const [ updateAvailable, setUpdateAvailable ] = useState(false);
    const [ waitingWorker, setWaitingWorker ] = useState<ServiceWorker | null>(null);

    useEffect(() => {
        const onUpdate = (registration: ServiceWorkerRegistration) => {
            setUpdateAvailable(true);
            setWaitingWorker(registration.waiting);
        }

        ENABLE_SERVICE_WORKER
            ? serviceWorker.register({ onUpdate })
            : serviceWorker.unregister();
    }, [])

    const reload = useCallback(() => {
        waitingWorker?.postMessage({ type: SERVICE_WORKER_SKIP_WAITING });
        setUpdateAvailable(false);
        window.location.reload(true);
    }, [waitingWorker])

    return {
        updateAvailable,
        reload,
    }
};
