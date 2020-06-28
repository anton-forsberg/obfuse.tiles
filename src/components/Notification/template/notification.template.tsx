import React, { FC } from "react";
import { NotificationStyled, NotificationActionStyled } from "./notification.styled";

interface Props {
    text: string;
    actionText?: string;
    onActionClick?: () => void;
}

export const NotificationTemplate: FC<Props> = ({
    text,
    actionText,
    onActionClick,
}) => (
    <NotificationStyled>
        {text}
        {actionText && (
            <NotificationActionStyled onClick={onActionClick}>
                {actionText}
            </NotificationActionStyled>
        )}
    </NotificationStyled>
);
