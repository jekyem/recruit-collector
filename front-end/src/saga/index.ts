import { all, fork } from "redux-saga/effects";
import recruit from "./recruit";
import oauth from "./OAuth";

export default function* rootSaga() {
  yield all([fork(recruit), fork(oauth)]);
}
