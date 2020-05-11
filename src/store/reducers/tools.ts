import { ToolProps } from 'interfaces/tool';
import {
  ToolsActionTypes,
  FETCH_TOOLS_SUCCESS,
  FETCH_TOOLS_FAILURE,
} from 'store/actions/tools/types';

export interface ToolsState {
  errorMessage?: string | null;
  data?: ToolProps[];
  fetching: boolean;
}

const INITIAL_STATE: ToolsState = ({
  errorMessage: null,
  data: [],
  fetching: false,
});

export default (state = INITIAL_STATE, action: ToolsActionTypes) => {
  switch (action.type) {
    case FETCH_TOOLS_SUCCESS:
      return { ...state, ...action.payload };
    case FETCH_TOOLS_FAILURE:
      return { ...state, ...action.payload };
    default:
      return state;
  }
};
