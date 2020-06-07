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

enum EventTypes {
    TouchMove = 'touchmove',
}

type MouseEventCallback = (args: MouseEventArgs) => void;
export const mouseEvent = (callback: MouseEventCallback): MouseEventHandler => event =>
    callback({
        mouseButton: String(event.button || event.buttons) as MouseButton,
        event,
    });

interface TouchEnterEvent {
    element?: Element;
    elementId?: string;
    callback: (event: TouchEvent) => void;
}

const onTouchEnterEvents: TouchEnterEvent[] = [];
let prevTouchEnterEvent: TouchEnterEvent;

const handleTouchEnter = (event: TouchEvent, element: Element) => {
    const matchingEvent = onTouchEnterEvents.find(event => element === event.element);
    if (!matchingEvent || prevTouchEnterEvent === matchingEvent)  return;
    prevTouchEnterEvent = matchingEvent;
    matchingEvent.callback(event);
}

export const registerTouchListener = () => {
    document.addEventListener(EventTypes.TouchMove, event => {
        const element = document.elementFromPoint(event.touches[0].clientX, event.touches[0].clientY);
        if (!element) return;
        handleTouchEnter(event, element);
    });
}

export const onTouchEnter = (element: Element | null, callback: () => void) => {
    if (!element) return;
    onTouchEnterEvents.push({ element, callback });
    return () => {
        const index = onTouchEnterEvents.findIndex(event => event.element === element);
        if (index === -1) return;
        onTouchEnterEvents.splice(index, 1);
    };
};
