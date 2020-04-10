import { LanguageProps } from 'interfaces/language';
import {
  LanguageActionTypes,
  CLEAR_LANGUAGES,
  FETCH_LANGUAGES_FAILURE,
  FETCH_LANGUAGES_SUCCES,
  FETCH_LANGUAGES_REQUEST,
} from './types';

export const fetchLanguagesRequest = (): LanguageActionTypes => ({
  type: FETCH_LANGUAGES_REQUEST,
});

export const fetchLanguagesSuccess = (data: LanguageProps[]): LanguageActionTypes => ({
  type: FETCH_LANGUAGES_SUCCES,
  payload: data,
});

export const fetchLanguagesFailure = (error: string): LanguageActionTypes => ({
  type: FETCH_LANGUAGES_FAILURE,
  payload: error,
});

export const clearLanguages = (): LanguageActionTypes => ({
  type: CLEAR_LANGUAGES,
});
