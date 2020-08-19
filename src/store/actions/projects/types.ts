import { ProjectsState } from 'store/reducers/projects';

export const FETCH_PROJECTS_REQUEST = 'FETCH_PROJECTS_REQUEST';
export const FETCH_PROJECTS_SUCCES = 'FETCH_PROJECTS_SUCCES';
export const FETCH_PROJECTS_FAILURE = 'FETCH_PROJECTS_FAILURE';
export const CLEAR_PROJECTS = 'CLEAR_PROJECTS';

interface FetchProjectsRequest {
  type: typeof FETCH_PROJECTS_REQUEST;
  payload: ProjectsState;
}

interface FetchProjectsSucces {
  type: typeof FETCH_PROJECTS_SUCCES;
  payload: ProjectsState;
}

interface FetchProjectsFailure {
  type: typeof FETCH_PROJECTS_FAILURE;
  payload: ProjectsState;
}

interface ClearProjects {
  type: typeof CLEAR_PROJECTS
}

export type ProjectsActionTypes = FetchProjectsRequest
  | FetchProjectsSucces
  | FetchProjectsFailure
  | ClearProjects;
