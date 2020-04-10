import { LanguageProps } from 'interfaces/language';

export const FETCH_LANGUAGES_REQUEST = 'FETCH_LANGUAGES_REQUEST';
export const FETCH_LANGUAGES_SUCCES = 'FETCH_LANGUAGES_SUCCES';
export const FETCH_LANGUAGES_FAILURE = 'FETCH_LANGUAGES_FAILURE';
export const CLEAR_LANGUAGES = 'CLEAR_LANGUAGES';

interface FetchLanguagesRequest {
  type: typeof FETCH_LANGUAGES_REQUEST
}

interface FetchLanguagesSucces {
  type: typeof FETCH_LANGUAGES_SUCCES;
  payload: LanguageProps[];
}

interface FetchLanguagesFailure {
  type: typeof FETCH_LANGUAGES_FAILURE;
  payload: string;
}

interface ClearLanguages {
  type: typeof CLEAR_LANGUAGES
}

export type LanguageActionTypes = FetchLanguagesRequest
  | FetchLanguagesSucces
  | FetchLanguagesFailure
  | ClearLanguages;
