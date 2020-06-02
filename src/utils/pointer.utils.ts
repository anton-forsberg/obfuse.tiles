import { MouseEventHandler, TouchEventHandler, MouseEvent, TouchEvent, PointerEventHandler, PointerEvent } from "react";

export enum MouseButton {
    Unknown,
    LMB = 1,
    RMB = 2,
}

export enum TouchType {
    Start = 'touchstart',
    End = 'touchend',
}

export enum PointerButton {
    Unknown,
    Main = 1,
}

interface MouseEventArgs {
    mouseButton: MouseButton;
    event: MouseEvent;
}

interface TouchEventArgs {
    touchType: TouchType;
    event: TouchEvent;
}

interface PointerEventArgs {
    pointerButton: PointerButton;
    event: PointerEvent;
}

type MouseEventCallback = (args: MouseEventArgs) => void;
type TouchEventCallback = (args: TouchEventArgs) => void;
type PointerEventCallback = (args: PointerEventArgs) => void;

export const mouseEvent = (callback: MouseEventCallback): MouseEventHandler => event =>
    callback({
        mouseButton: event.button || event.buttons,
        event,
    });

export const touchEvent = (callback: TouchEventCallback): TouchEventHandler => event =>
    callback({
        touchType: event.type as TouchType,
        event,
    });

export const pointerEvent = (callback: PointerEventCallback): PointerEventHandler => event =>
    callback({
        pointerButton: event.button || event.buttons,
        event,
    });