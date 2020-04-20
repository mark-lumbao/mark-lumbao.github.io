import { BioProps } from 'interfaces/bio';
import {
  FETCH_BIO_REQUEST,
  FETCH_BIO_SUCCESS,
  FETCH_BIO_FAILURE,
  BioActionTypes,
} from 'store/actions/bio/types';

export interface BioState {
  errorMessage?: string | null;
  data?: BioProps | null;
  fetching: boolean;
}

export const initialState: BioState = ({
  errorMessage: null,
  data: null,
  fetching: false,
});

export default (state = initialState, action: BioActionTypes) => {
  switch (action.type) {
    case FETCH_BIO_REQUEST: {
      return { ...state, ...action.payload };
    }
    case FETCH_BIO_SUCCESS: {
      return { ...state, ...action.payload };
    }
    case FETCH_BIO_FAILURE: {
      return { ...state, ...action.payload };
    }
    default:
      return state;
  }
};
