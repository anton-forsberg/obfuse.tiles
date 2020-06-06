import React, { FC } from "react";
import { useServiceWorker } from "../../../../hooks/serviceWorker.hooks"
import { ServiceWorkerUI } from "./serviceWorker.ui";

export const ServiceWorkerContainer: FC = () => {
    const { updateAvailable, reload } = useServiceWorker();

    return (
        <ServiceWorkerUI
            updateAvailable={updateAvailable}
            reload={reload}
        />
    );
}