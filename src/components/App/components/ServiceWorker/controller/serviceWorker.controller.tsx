import React, { FC } from "react";
import { useServiceWorker } from "../../../../../hooks/serviceWorker.hooks"
import { ServiceWorker } from "../template";

export const ServiceWorkerController: FC = () => {
    const { updateAvailable, reload } = useServiceWorker();

    return (
        <ServiceWorker
            updateAvailable={updateAvailable}
            reload={reload}
        />
    );
}