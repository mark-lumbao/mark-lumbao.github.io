import { BioProps } from 'interfaces/bio';
import {
  BioActionTypes,
  FETCH_BIO_REQUEST,
  FETCH_BIO_SUCCESS,
  FETCH_BIO_FAILURE,
} from 'store/actions/bio/types';

export const fetchBioRequest = (): BioActionTypes => ({
  type: FETCH_BIO_REQUEST,
  payload: { fetching: true },
});

export const fetchBioSuccess = (data: BioProps): BioActionTypes => ({
  type: FETCH_BIO_SUCCESS,
  payload: { data, fetching: false },
});

export const fetchBioFailure = (errorMessage: string): BioActionTypes => ({
  type: FETCH_BIO_FAILURE,
  payload: { errorMessage, fetching: false },
});
