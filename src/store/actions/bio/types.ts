import { BioState } from 'store/reducers/bio';

export const FETCH_BIO_REQUEST = 'FETCH_BIO_REQUEST';
export const FETCH_BIO_SUCCESS = 'FETCH_BIO_SUCCESS';
export const FETCH_BIO_FAILURE = 'FETCH_BIO_FAILURE';

export interface FetchBioRequest {
  type: typeof FETCH_BIO_REQUEST;
  payload: BioState;
}

export interface FetchBioSuccess {
  type: typeof FETCH_BIO_SUCCESS;
  payload: BioState;
}

export interface FetchBioFailure {
  type: typeof FETCH_BIO_FAILURE;
  payload: BioState;
}

export type BioActionTypes = FetchBioRequest | FetchBioSuccess | FetchBioFailure;
