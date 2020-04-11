import { LanguageProps } from 'interfaces/language';
import {
  CLEAR_LANGUAGES,
  FETCH_LANGUAGES_REQUEST,
  FETCH_LANGUAGES_SUCCES,
  FETCH_LANGUAGES_FAILURE,
  LanguageActionTypes,
} from 'store/actions/languages/types';

export interface LanguagesState {
  errorMessage?: string | null;
  data?: LanguageProps[];
  fetching: boolean;
}

const initialState: LanguagesState = ({
  errorMessage: null,
  data: [],
  fetching: false,
});

export default (state = initialState, action: LanguageActionTypes) => {
  switch (action.type) {
    case CLEAR_LANGUAGES: {
      return { ...state, ...initialState };
    }
    case FETCH_LANGUAGES_SUCCES: {
      return { ...state, ...action.payload };
    }
    case FETCH_LANGUAGES_FAILURE: {
      return { ...state, ...action.payload };
    }
    case FETCH_LANGUAGES_REQUEST: {
      return { ...state, ...action.payload };
    }
    default:
      return state;
  }
};
