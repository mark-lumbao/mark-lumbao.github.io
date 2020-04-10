import { LanguageProps } from 'interfaces/language';
import {
  CLEAR_LANGUAGES,
  FETCH_LANGUAGES_SUCCES,
  FETCH_LANGUAGES_FAILURE,
  LanguageActionTypes,
} from 'store/actions/languages/types';

export interface LanguagesState {
  errorMessage: string | null;
  data: LanguageProps[];
}

const initialState: LanguagesState = ({
  errorMessage: null,
  data: [],
});

export default (state = initialState, action: LanguageActionTypes) => {
  switch (action.type) {
    case CLEAR_LANGUAGES: {
      return {
        errorMessage: null,
        data: [],
      };
    }
    case FETCH_LANGUAGES_SUCCES: {
      return { ...state, data: [...action.payload] };
    }
    case FETCH_LANGUAGES_FAILURE: {
      return { ...state, errorMessage: action.payload };
    }
    default:
      return state;
  }
};
