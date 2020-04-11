import { LanguagesState } from 'store/reducers/languages';

export const FETCH_LANGUAGES_REQUEST = 'FETCH_LANGUAGES_REQUEST';
export const FETCH_LANGUAGES_SUCCES = 'FETCH_LANGUAGES_SUCCES';
export const FETCH_LANGUAGES_FAILURE = 'FETCH_LANGUAGES_FAILURE';
export const CLEAR_LANGUAGES = 'CLEAR_LANGUAGES';

interface FetchLanguagesRequest {
  type: typeof FETCH_LANGUAGES_REQUEST;
  payload: LanguagesState;
}

interface FetchLanguagesSucces {
  type: typeof FETCH_LANGUAGES_SUCCES;
  payload: LanguagesState;
}

interface FetchLanguagesFailure {
  type: typeof FETCH_LANGUAGES_FAILURE;
  payload: LanguagesState;
}

interface ClearLanguages {
  type: typeof CLEAR_LANGUAGES
}

export type LanguageActionTypes = FetchLanguagesRequest
  | FetchLanguagesSucces
  | FetchLanguagesFailure
  | ClearLanguages;
