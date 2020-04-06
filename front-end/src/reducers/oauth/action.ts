import NaverToken from "login-module/naver-login/NaverToken";

export const OAuthAction = {
  LOGIN_REQUEST: "LOGIN_REQUEST",
  LOGIN_FAILURE: "LOGIN_FAILURE",
  SET_PAGE_TOKEN: "SET_PAGE_TOKEN",
  LOGOUT: "LOGOUT",
  SHOW_LOGIN_POPUP: "SHOW_LOGIN_POPUP",
  HIDE_LOGIN_POPUP: "HIDE_LOGIN_POPUP",
};

//---------------------------------------
export interface loginRequestReturnType {
  type: string;
  payload: {
    oauthSite: string;
    token: NaverToken;
  };
}
export const loginRequest = (
  oauthSite: string,
  token: NaverToken
): loginRequestReturnType => ({
  type: OAuthAction.LOGIN_REQUEST,
  payload: { oauthSite, token },
});
//---------------------------------------
//---------------------------------------
export interface loginSucessReturnType {
  type: string;
  payload: {
    pageToken: string;
  };
}
export const setPageToken = (pageToken: string): loginSucessReturnType => ({
  type: OAuthAction.SET_PAGE_TOKEN,
  payload: { pageToken },
});
//---------------------------------------
//---------------------------------------
export interface logoutReturnType {
  type: string;
}
export const logout = (): logoutReturnType => ({
  type: OAuthAction.LOGOUT,
});
//---------------------------------------
//---------------------------------------
export interface showLoginPopupReturnType {
  type: string;
}
export const showLoginPopup = () => ({
  type: OAuthAction.SHOW_LOGIN_POPUP,
});
//---------------------------------------

//---------------------------------------
export interface hideLoginPopupReturnType {
  type: string;
}
export const hideLoginPopup = () => ({
  type: OAuthAction.HIDE_LOGIN_POPUP,
});
//---------------------------------------
