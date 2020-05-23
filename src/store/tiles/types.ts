export interface TileState {
    [tileId: string]: string;
};

export interface TileColorCount {
    color: string;
    count: number;
}

export enum TileActionTypes {
    SET_TILE = 'SET_TILE',
}

interface SetTileAction {
    type: TileActionTypes.SET_TILE;
    row: number;
    column: number;
    value?: string;
}

export type TileAction =
    SetTileAction;