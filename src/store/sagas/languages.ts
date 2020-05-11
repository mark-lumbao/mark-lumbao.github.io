import { takeLatest, put, call } from 'redux-saga/effects';
import { FETCH_LANGUAGES_REQUEST } from 'store/actions/languages/types';
import { fetchLanguagesFailure, fetchLanguagesSuccess } from 'store/actions/languages';
import { fetchLang } from 'constants/api';

function* fetchLanguages() {
  try {
    const data = yield call(fetchLang);
    return yield put(fetchLanguagesSuccess(data));
  } catch (error) {
    return yield put(fetchLanguagesFailure(error.message));
  }
}

export default function* () {
  yield takeLatest(FETCH_LANGUAGES_REQUEST, fetchLanguages);
}
