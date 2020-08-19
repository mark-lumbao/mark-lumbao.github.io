export const fetchLang = () => fetch('/assets/data/languages.json')
  .then((response) => response.json())
  .then((data) => data);

export const fetchBio = () => fetch('/assets/data/bio.json')
  .then((response) => response.json())
  .then((data) => data);

export const fetchProjects = () => fetch('/assets/data/projects.json')
  .then((response) => response.json())
  .then((data) => data);

export const fetchEmployment = () => fetch('/assets/data/employment.json')
  .then((response) => response.json())
  .then((data) => data);

export const fetchTools = () => fetch('/assets/data/tools.json')
  .then((response) => response.json())
  .then((data) => data);
