import Reducer from "reducers/Reducer";
import NaverToken from "login-module/naver-login/NaverToken";

export const PageAction = {
  PAGE_INITIALIZE_RECRUIT_LIST: "PAGE_INITIALIZE_RECRUIT_LIST",
  PAGE_GET_LOGIN_TOKEN: "PAGE_GET_LOGIN_TOKEN",
  PAGE_GET_ACCESS_TOKEN_AT_SESSION_STORAGE:
    "PAGE_GET_ACCESS_TOKEN_AT_SESSION_STORAGE",
};

/*-----------------------------------------------------
-----------------------------------------------------*/
export interface InitializeRecruitList extends Reducer<null> {}
//---------------------------------------------------//
export const initializeRecruitList = (): InitializeRecruitList => ({
  type: PageAction.PAGE_INITIALIZE_RECRUIT_LIST,
  payload: null,
});

/*-----------------------------------------------------
-----------------------------------------------------*/
export interface GetLoginToken
  extends Reducer<{ site: string; token: NaverToken }> {}
//---------------------------------------------------//
export const getLoginToken = (
  site: string,
  token: NaverToken
): GetLoginToken => ({
  type: PageAction.PAGE_GET_LOGIN_TOKEN,
  payload: { site, token },
});

/*-----------------------------------------------------
-----------------------------------------------------*/
export interface GetAccessTokenAtSessionStorage
  extends Reducer<{ token: string }> {}
//---------------------------------------------------//
export const GetAccessTokenAtSessionStorage = (
  token: string
): GetAccessTokenAtSessionStorage => ({
  type: PageAction.PAGE_GET_ACCESS_TOKEN_AT_SESSION_STORAGE,
  payload: { token },
});
