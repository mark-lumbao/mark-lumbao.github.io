import { EmploymentProps } from 'interfaces/employment';
import {
  FETCH_EMPLOYMENT_REQUEST,
  FETCH_EMPLOYMENT_SUCCESS,
  FETCH_EMPLOYMENT_FAILURE,
  EmploymentActionTypes,
} from 'store/actions/employment/types';

export interface EmploymentState {
  errorMessage?: string | null;
  data?: EmploymentProps[];
  fetching: boolean;
}

const initialState: EmploymentState = {
  errorMessage: null,
  data: [],
  fetching: false,
};

export default (state = initialState, action: EmploymentActionTypes) => {
  switch (action.type) {
    case FETCH_EMPLOYMENT_REQUEST:
      return { ...state, ...action.payload };
    case FETCH_EMPLOYMENT_SUCCESS:
      return { ...state, ...action.payload };
    case FETCH_EMPLOYMENT_FAILURE:
      return { ...state, ...action.payload };
    default:
      return state;
  }
};
