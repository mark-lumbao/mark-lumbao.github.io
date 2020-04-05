/* eslint-disable no-unused-vars */
import { LanguageActionTypes, FETCH_LANGUAGES, CLEAR_LANGUAGES } from './types';

export const fetchLanguages = (): LanguageActionTypes => ({
  type: FETCH_LANGUAGES,
});

export const clearLanguages = (): LanguageActionTypes => ({
  type: CLEAR_LANGUAGES,
});
