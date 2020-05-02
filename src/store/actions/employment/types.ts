import { EmploymentState } from 'store/reducers/employment';

export const FETCH_EMPLOYMENT_REQUEST = 'FETCH_EMPLOYMENT_REQUEST';
export const FETCH_EMPLOYMENT_SUCCESS = 'FETCH_EMPLOYMENT_SUCCESS';
export const FETCH_EMPLOYMENT_FAILURE = 'FETCH_EMPLOYMENT_FAILURE';

export interface FetchEmploymentRequest {
  type: typeof FETCH_EMPLOYMENT_REQUEST;
  payload: EmploymentState;
}

export interface FetchEmploymentSuccess {
  type: typeof FETCH_EMPLOYMENT_SUCCESS;
  payload: EmploymentState;
}

export interface FetchEmploymentFailure {
  type: typeof FETCH_EMPLOYMENT_FAILURE;
  payload: EmploymentState;
}

export type EmploymentActionTypes = FetchEmploymentRequest |
  FetchEmploymentSuccess |
  FetchEmploymentFailure;
