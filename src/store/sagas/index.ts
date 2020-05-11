import { all } from 'redux-saga/effects';
import languagesSagas from './languages';
import bioSagas from './bio';
import employmentSagas from './employment';
import toolsSagas from './tools';

export default function* () {
  yield all([
    languagesSagas(),
    bioSagas(),
    employmentSagas(),
    toolsSagas(),
  ]);
}
