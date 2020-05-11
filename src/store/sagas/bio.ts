import { takeLatest, call, put } from 'redux-saga/effects';
import { FETCH_BIO_REQUEST } from 'store/actions/bio/types';
import { fetchBioSuccess, fetchBioFailure } from 'store/actions/bio';
import { fetchBio } from 'constants/api';

function* fetchBioAsync() {
  try {
    const data = yield call(fetchBio);
    return yield put(fetchBioSuccess(data));
  } catch (error) {
    return yield put(fetchBioFailure(error.message));
  }
}

export default function* () {
  yield takeLatest(FETCH_BIO_REQUEST, fetchBioAsync);
}
