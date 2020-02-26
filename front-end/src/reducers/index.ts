import { combineReducers } from "redux";
import recruit, { RecruitStateType } from "./recruit";
import search, { SearchStateType } from "./search";

export interface ReducerType {
  recruit: RecruitStateType;
  search: SearchStateType;
}

export default combineReducers({ recruit, search });
