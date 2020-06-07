import { Dictionary } from "../../utils/types.utils";

export type TileState = Dictionary<string>;

export interface TilesPreset {
    name: string;
    id: string;
    tiles: () => TileState;
    rows?: number;
    columns?: number;
};

export interface TilePosition {
    column: number;
    row: number;
}

export enum SetTileOperation {
    Fill,
    Clear,
    Custom,
}

export enum TileActionTypes {
    SET_TILES_INIT = 'SET_TILES_INIT',
    SET_TILES_SUCCESS = 'SET_TILES_SUCCESS',
    SET_ALL_TILES = 'SET_ALL_TILES',
}

export interface SetTilesInitAction {
    type: TileActionTypes.SET_TILES_INIT;
    row: number;
    column: number;
    operation: SetTileOperation;
}

export interface SetTilesSuccessAction {
    type: TileActionTypes.SET_TILES_SUCCESS;
    tileIds: string[];
    color?: string;
}

export interface SetAllTilesAction {
    type: TileActionTypes.SET_ALL_TILES,
    tiles: TileState,
}

export type TileAction = SetTilesInitAction
    | SetTilesSuccessAction
    | SetAllTilesAction;