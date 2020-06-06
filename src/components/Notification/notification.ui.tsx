import React, { FC } from "react";
import { NotificationStyle, NotificationActionStyle } from "./notification.style";

interface Props {
    text: string;
    actionText?: string;
    onActionClick?: () => void;
}

export const NotificationUI: FC<Props> = ({
    text,
    actionText,
    onActionClick,
}) => (
    <NotificationStyle>
        {text}
        {actionText && (
            <NotificationActionStyle onClick={onActionClick}>
                {actionText}
            </NotificationActionStyle>
        )}
    </NotificationStyle>
);
