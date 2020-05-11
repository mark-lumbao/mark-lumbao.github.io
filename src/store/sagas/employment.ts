import { takeLatest, call, put } from 'redux-saga/effects';
import { FETCH_EMPLOYMENT_REQUEST } from 'store/actions/employment/types';
import { fetchEmploymentSuccess, fetchEmploymentFailure } from 'store/actions/employment';
import { fetchEmployment } from 'constants/api';

function* fetchEmploymentAsync() {
  try {
    const data = yield call(fetchEmployment);
    return yield put(fetchEmploymentSuccess(data));
  } catch (error) {
    return yield put(fetchEmploymentFailure(error.message));
  }
}

export default function* () {
  yield takeLatest(FETCH_EMPLOYMENT_REQUEST, fetchEmploymentAsync);
}
