import { ProjectsProps } from 'interfaces/project';
import {
  CLEAR_PROJECTS,
  FETCH_PROJECTS_REQUEST,
  FETCH_PROJECTS_SUCCES,
  FETCH_PROJECTS_FAILURE,
  ProjectsActionTypes,
} from 'store/actions/projects/types';

export interface ProjectsState {
  errorMessage?: string | null;
  data?: ProjectsProps[];
  fetching: boolean;
}

const initialState: ProjectsState = ({
  errorMessage: null,
  data: [],
  fetching: false,
});

export default (state = initialState, action: ProjectsActionTypes) => {
  switch (action.type) {
    case CLEAR_PROJECTS: {
      return { ...state, ...initialState };
    }
    case FETCH_PROJECTS_SUCCES: {
      return { ...state, ...action.payload };
    }
    case FETCH_PROJECTS_FAILURE: {
      return { ...state, ...action.payload };
    }
    case FETCH_PROJECTS_REQUEST: {
      return { ...state, ...action.payload };
    }
    default:
      return state;
  }
};
