import { all, fork } from "redux-saga/effects";
import {
  watchSubmitSearchBox,
  watchInitializeRecruitList,
} from "./searchRecruit";
import { watchChangePage } from "./changePage";

export default function* recruitSaga() {
  yield all([
    fork(watchSubmitSearchBox),
    fork(watchInitializeRecruitList),
    fork(watchChangePage),
  ]);
}
