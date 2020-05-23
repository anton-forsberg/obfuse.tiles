import { MouseEventHandler } from "react";

export enum MouseButtons {
    Unknown,
    LMB = 1,
    RMB = 2,
}

interface MouseEventParams {
    mouseButton: MouseButtons;
}

export const mouseEvent = (callback: (args: MouseEventParams) => void): MouseEventHandler =>
    (mouseEvent) => callback({
        mouseButton: mouseEvent.button || mouseEvent.buttons
    });