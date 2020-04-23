import { all, fork } from "redux-saga/effects";
import recruitSaga from "./recruitSaga";
import loginSaga from "./loginSaga";

export default function* rootSaga() {
  yield all([fork(recruitSaga), fork(loginSaga)]);
}
