import { LanguageProps } from 'interfaces/language';
import { LanguagesState } from 'store/reducers/languages';
import {
  LanguageActionTypes,
  CLEAR_LANGUAGES,
  FETCH_LANGUAGES_FAILURE,
  FETCH_LANGUAGES_SUCCES,
  FETCH_LANGUAGES_REQUEST,
} from './types';

export const fetchLanguagesRequest = (): LanguageActionTypes => ({
  type: FETCH_LANGUAGES_REQUEST,
  payload: { fetching: true } as LanguagesState,
});

export const fetchLanguagesSuccess = (data: LanguageProps[]): LanguageActionTypes => ({
  type: FETCH_LANGUAGES_SUCCES,
  payload: { data, fetching: false } as LanguagesState,
});

export const fetchLanguagesFailure = (errorMessage: string): LanguageActionTypes => ({
  type: FETCH_LANGUAGES_FAILURE,
  payload: { errorMessage, fetching: false } as LanguagesState,
});

export const clearLanguages = (): LanguageActionTypes => ({
  type: CLEAR_LANGUAGES,
});
