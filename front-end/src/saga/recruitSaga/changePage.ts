import { takeLatest, select, put } from "redux-saga/effects";
import { UserAction, ChangePage } from "action/UserAction";
import { RootReducer } from "reducers";

import {
  requestChangePage,
  successChangePage,
  failureChangePage,
} from "action/SagaAction";
import Api from "api/Api";

function* changePage(action: ChangePage) {
  const { term } = yield select(
    ({ searchBoxReducer }: RootReducer) => searchBoxReducer
  );
  const { page } = action.payload;
  const { pageSize } = yield select(
    ({ recruitListReducer }: RootReducer) => recruitListReducer
  );
  const offset = (page - 1) * pageSize;
  try {
    yield put(requestChangePage());
    const { recruits, total } = yield Api.getRecruits(term, offset, pageSize);
    yield put(successChangePage(recruits, total));
  } catch (e) {
    yield put(failureChangePage());
  }
}

export function* watchChangePage() {
  yield takeLatest(UserAction.USER_CHANGE_PAGE, changePage);
}
