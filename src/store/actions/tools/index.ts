import { ToolProps } from 'interfaces/tool';
import {
  FETCH_TOOLS_SUCCESS,
  FETCH_TOOLS_FAILURE,
  FETCH_TOOLS_REQUEST,
  ToolsActionTypes,
} from './types';

export const fetchToolsRequest = (): ToolsActionTypes => ({
  type: FETCH_TOOLS_REQUEST,
  payload: { errorMessage: null, fetching: true },
});

export const fetchToolsSuccess = (data: ToolProps[]): ToolsActionTypes => ({
  type: FETCH_TOOLS_SUCCESS,
  payload: { errorMessage: null, fetching: false, data },
});

export const fetchToolsFailure = (error: string): ToolsActionTypes => ({
  type: FETCH_TOOLS_FAILURE,
  payload: { errorMessage: error, fetching: false },
});
