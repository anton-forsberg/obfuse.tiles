import { MouseEventHandler, MouseEvent } from "react";

export enum MouseButton {
    Unknown = "0",
    LMB = "1",
    RMB = "2",
}

interface MouseEventArgs {
    mouseButton: MouseButton;
    event: MouseEvent;
}

type MouseEventCallback = (args: MouseEventArgs) => void;

export const mouseEvent = (callback: MouseEventCallback): MouseEventHandler => event =>
    callback({
        mouseButton: String(event.button || event.buttons) as MouseButton,
        event,
    });
