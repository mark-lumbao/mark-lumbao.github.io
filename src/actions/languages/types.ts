export const FETCH_LANGUAGES = 'FETCH_LANGUAGES';
export const CLEAR_LANGUAGES = 'CLEAR_LANGUAGES';

interface FetchLanguages {
  type: typeof FETCH_LANGUAGES
}

interface ClearLanguages {
  type: typeof CLEAR_LANGUAGES
}

export type LanguageActionTypes = FetchLanguages | ClearLanguages;
