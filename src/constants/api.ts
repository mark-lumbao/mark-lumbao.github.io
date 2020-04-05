// eslint-disable-next-line import/prefer-default-export
export const fetchLang = () => fetch('/assets/data/languages.json')
  .then((response) => response.json())
  .then((data) => data);
