import { EmploymentProps } from 'interfaces/employment';
import {
  FETCH_EMPLOYMENT_SUCCESS,
  FETCH_EMPLOYMENT_FAILURE,
  FETCH_EMPLOYMENT_REQUEST,
  EmploymentActionTypes,
} from './types';

export const fetchEmploymentRequest = (): EmploymentActionTypes => ({
  type: FETCH_EMPLOYMENT_REQUEST,
  payload: { fetching: true },
});

export const fetchEmploymentSuccess = (data: EmploymentProps[]): EmploymentActionTypes => ({
  type: FETCH_EMPLOYMENT_SUCCESS,
  payload: { fetching: false, data },
});

export const fetchEmploymentFailure = (errorMessage: string): EmploymentActionTypes => ({
  type: FETCH_EMPLOYMENT_FAILURE,
  payload: { fetching: false, errorMessage },
});
