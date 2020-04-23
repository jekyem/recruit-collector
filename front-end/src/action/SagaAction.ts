import Reducer from "reducers/Reducer";
import RecruitInfo from "model/RecruitInfo";

export const SagaAction = {
  REQUEST_SEARCH_RECRUITS: "REQUEST_SEARCH_RECRUITS",
  SUCCESS_SEARCH_RECRUITS: "SUCCESS_SEARCH_RECRUITS",
  FAILURE_SEARCH_RECRUITS: "FAILURE_SEARCH_RECRUITS",
  REQUEST_CHANGE_PAGE: "REQUEST_CHANGE_PAGE",
  SUCCESS_CHANGE_PAGE: "SUCCESS_CHANGE_PAGE",
  FAILURE_CHANGE_PAGE: "FAILURE_CHANGE_PAGE",
  REQUEST_LOGIN: "REQUEST_LOGIN",
  FAILURE_LOGIN: "FAILURE_LOGIN",
  SUCCESS_LOGIN: "SUCCESS_LOGIN",
};

/*-----------------------------------------------------
-----------------------------------------------------*/
export interface RequestSearchRecruits extends Reducer<null> {}
//---------------------------------------------------//
export const requestSearchRecruits = (): RequestSearchRecruits => ({
  type: SagaAction.REQUEST_SEARCH_RECRUITS,
  payload: null,
});
//---------------------------------------------------//
//---------------------------------------------------//
export interface SuccessSearchRecruits
  extends Reducer<{ recruits: RecruitInfo[]; total: number }> {}
//---------------------------------------------------//
export const successSearchRecruits = (
  recruits: RecruitInfo[],
  total: number
): SuccessSearchRecruits => ({
  type: SagaAction.SUCCESS_SEARCH_RECRUITS,
  payload: {
    recruits,
    total,
  },
});
//---------------------------------------------------//
//---------------------------------------------------//
export interface FailureSearchRecruits extends Reducer<null> {}
//---------------------------------------------------//
export const failureSearchRecruits = (): FailureSearchRecruits => ({
  type: SagaAction.FAILURE_SEARCH_RECRUITS,
  payload: null,
});

/*-----------------------------------------------------
-----------------------------------------------------*/
export interface RequestChangePage extends Reducer<null> {}
//---------------------------------------------------//
export const requestChangePage = (): RequestChangePage => ({
  type: SagaAction.REQUEST_CHANGE_PAGE,
  payload: null,
});
//---------------------------------------------------//
//---------------------------------------------------//
export interface SuccessChangePage
  extends Reducer<{ recruits: RecruitInfo[]; total: number }> {}
//---------------------------------------------------//
export const successChangePage = (
  recruits: RecruitInfo[],
  total: number
): SuccessChangePage => ({
  type: SagaAction.SUCCESS_CHANGE_PAGE,
  payload: {
    recruits,
    total,
  },
});
//---------------------------------------------------//
//---------------------------------------------------//
export interface FailureChangePage extends Reducer<null> {}
//---------------------------------------------------//
export const failureChangePage = (): FailureChangePage => ({
  type: SagaAction.FAILURE_CHANGE_PAGE,
  payload: null,
});

/*-----------------------------------------------------
-----------------------------------------------------*/
export interface RequestLogin extends Reducer<null> {}
//---------------------------------------------------//
export const requestLogin = (): RequestLogin => ({
  type: SagaAction.REQUEST_LOGIN,
  payload: null,
});
//---------------------------------------------------//
//---------------------------------------------------//
export interface SuccessLogin extends Reducer<{ token: string }> {}
//---------------------------------------------------//
export const successLogin = (token: string): SuccessLogin => ({
  type: SagaAction.SUCCESS_LOGIN,
  payload: { token },
});
//---------------------------------------------------//
//---------------------------------------------------//
export interface FailureLogin extends Reducer<null> {}
//---------------------------------------------------//
export const failureLogin = (): FailureLogin => ({
  type: SagaAction.FAILURE_LOGIN,
  payload: null,
});
