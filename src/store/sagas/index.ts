import { all } from 'redux-saga/effects';
import languagesSagas from './languages';

export default function* () {
  yield all([
    languagesSagas(),
  ]);
}
