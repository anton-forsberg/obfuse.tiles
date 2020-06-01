export interface TileState {
    [tileId: string]: string;
};

export interface TileColorCount {
    color: string;
    count: number;
}

export type TilesPreset = {
    name: string;
    id: string;
    tiles: () => TileState;
    rows: number;
    columns: number;
};

export enum TileActionTypes {
    FILL_TILE_INIT = 'FILL_TILE_INIT',
    FILL_TILE_SUCCESS = 'FILL_TILE_SUCCESS',
    CLEAR_TILE = 'CLEAR_TILE',
    SET_TILES = 'SET_TILES',
}

export interface FillTileRequestAction {
    type: TileActionTypes.FILL_TILE_INIT;
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

export interface SetTilesAction {
    type: TileActionTypes.SET_TILES,
    tiles: TileState,
}

export type TileAction = FillTileRequestAction
    | FillTileSuccessAction
    | ClearTileAction
    | SetTilesAction;