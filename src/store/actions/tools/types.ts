import { ToolsState } from 'store/reducers/tools';

export const FETCH_TOOLS_REQUEST = 'FETCH_TOOLS_REQUEST';
export const FETCH_TOOLS_SUCCESS = 'FETCH_TOOLS_SUCCESS';
export const FETCH_TOOLS_FAILURE = 'FETCH_TOOLS_FAILURE';

export interface FetchToolsRequest {
  type: typeof FETCH_TOOLS_REQUEST;
  payload: ToolsState;
}

export interface FetchToolsSuccess {
  type: typeof FETCH_TOOLS_SUCCESS;
  payload: ToolsState;
}

export interface FetchToolsFailure {
  type: typeof FETCH_TOOLS_FAILURE;
  payload: ToolsState;
}

export type ToolsActionTypes = FetchToolsRequest | FetchToolsSuccess | FetchToolsFailure;
