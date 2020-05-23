export interface ColorState {
    [colorId: string]: string | undefined;
}

export interface Color {
    id: string;
    value: string;
}

export interface ColorCount {
    color?: string,
    count: number,
}

export const PALETTE_COLOR_SIZE = 20;