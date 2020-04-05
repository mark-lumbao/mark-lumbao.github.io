/* eslint-disable no-unused-vars */
import { LanguageProps } from 'interfaces/language';
import { FETCH_LANGUAGES, CLEAR_LANGUAGES, LanguageActionTypes } from 'actions/languages/types';

const initialState: LanguageProps[] = [];

export default (state = initialState, action: LanguageActionTypes) => {
  switch (action.type) {
    case FETCH_LANGUAGES: {
      return state;
    }
    case CLEAR_LANGUAGES: {
      return [];
    }
    default:
      return state;
  }
};
