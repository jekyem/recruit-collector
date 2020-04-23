import { put, takeLatest, select } from "redux-saga/effects";
import { UserAction, SubmitSearchBox } from "action/UserAction";
import { RootReducer } from "reducers";
import { SearchBoxReducer } from "reducers/searchBoxReducer";
import {
  requestSearchRecruits,
  successSearchRecruits,
  failureSearchRecruits,
} from "action/SagaAction";
import Api from "api/Api";
import { RecruitListReducer } from "reducers/recruitListReducer";
import { PageAction } from "action/PageAction";

function* searchRecruit(action: SubmitSearchBox) {
  const { term }: SearchBoxReducer = yield select(
    ({ searchBoxReducer: searchParmReducer }: RootReducer) => searchParmReducer
  );

  const { pageSize }: RecruitListReducer = yield select(
    ({ recruitListReducer }: RootReducer) => recruitListReducer
  );

  try {
    yield put(requestSearchRecruits());
    const { recruits, total } = yield Api.getRecruits(term, 0, pageSize);
    yield put(successSearchRecruits(recruits, total));
  } catch (e) {
    yield put(failureSearchRecruits());
  }
}

export function* watchSubmitSearchBox() {
  yield takeLatest(UserAction.USER_SUBMIT_SEARCH_BOX, searchRecruit);
}

export function* watchInitializeRecruitList() {
  yield takeLatest(PageAction.PAGE_INITIALIZE_RECRUIT_LIST, searchRecruit);
}
