import { combineReducers } from "redux";
import recruit, { RecruitStateType } from "./recruit";
import search, { SearchStateType } from "./search";
import oauth, { OAuthStateType } from "./oauth";

export interface ReducerType {
  recruit: RecruitStateType;
  search: SearchStateType;
  oauth: OAuthStateType;
}

export default combineReducers({ recruit, search, oauth });
