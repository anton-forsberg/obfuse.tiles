import React, { FC } from "react";
import { Notification } from '../../../../Notification/template';

interface Props {
    updateAvailable: boolean;
    reload: () => void;
}

export const ServiceWorkerTemplate: FC<Props> = ({
    updateAvailable,
    reload,
}) => updateAvailable ? (
    <Notification
        text="A new version of the application is available"
        actionText="Update"
        onActionClick={reload}
    />
) : null;
