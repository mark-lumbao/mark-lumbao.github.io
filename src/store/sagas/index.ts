import { all } from 'redux-saga/effects';
import languagesSagas from './languages';
import bioSagas from './bio';

export default function* () {
  yield all([
    languagesSagas(),
    bioSagas(),
  ]);
}
