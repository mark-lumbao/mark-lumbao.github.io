import { ProjectsProps } from 'interfaces/project';
import {
  ProjectsActionTypes,
  CLEAR_PROJECTS,
  FETCH_PROJECTS_FAILURE,
  FETCH_PROJECTS_SUCCES,
  FETCH_PROJECTS_REQUEST,
} from './types';

export const fetchProjectsRequest = (): ProjectsActionTypes => ({
  type: FETCH_PROJECTS_REQUEST,
  payload: { fetching: true },
});

export const fetchProjectsSuccess = (data: ProjectsProps[]): ProjectsActionTypes => ({
  type: FETCH_PROJECTS_SUCCES,
  payload: { data, fetching: false },
});

export const fetchProjectsFailure = (errorMessage: string): ProjectsActionTypes => ({
  type: FETCH_PROJECTS_FAILURE,
  payload: { errorMessage, fetching: false },
});

export const clearProjects = (): ProjectsActionTypes => ({
  type: CLEAR_PROJECTS,
});
