export interface TileState {
    [tileId: string]: string;
};

export interface TileColorCount {
    color: string;
    count: number;
}

export enum TileActionTypes {
    FILL_TILE_REQUEST = 'FILL_TILE_REQUEST',
    FILL_TILE_SUCCESS = 'FILL_TILE_SUCCESS',
    CLEAR_TILE = 'CLEAR_TILE',
}

export interface FillTileRequestAction {
    type: TileActionTypes.FILL_TILE_REQUEST;
    row: number;
    column: number;
}

export interface FillTileSuccessAction {
    type: TileActionTypes.FILL_TILE_SUCCESS;
    row: number;
    column: number;
    color: string;
}

export interface ClearTileAction {
    type: TileActionTypes.CLEAR_TILE;
    row: number;
    column: number;
}

export type TileAction =
    FillTileRequestAction |
    FillTileSuccessAction |
    ClearTileAction;