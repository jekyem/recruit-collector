import Reducer from "reducers/Reducer";

export const UserAction = {
  USER_CLICK_LOGIN_BUTTON: "USER_CLICK_LOGIN_BUTTON",
  USER_CLICK_LOGOUT_BUTTON: "USER_CLICK_LOGOUT_BUTTON",
  USER_CLICK_OUTSIDE_LOGIN_POPUP: "USER_CLICK_OUTSIDE_LOGIN_POPUP",
  USER_CHANGE_SEARCH_INPUT: "USER_CHANGE_SEARCH_INPUT",
  USER_REMOVE_TAG: "USER_REMOVE_TAG",
  USER_SUBMIT_SEARCH_BOX: "USER_SUBMIT_SEARCH_BOX",
  USER_CHANGE_PAGE: "USER_CHANGE_PAGE",
  USER_CHANGE_PAGE_SIZE: "USER_CHANGE_PAGE_SIZE",
};

/*-----------------------------------------------------
-----------------------------------------------------*/
export interface ClickLoginButton extends Reducer<null> {}
//---------------------------------------------------//
export const clickLoginButton = (): ClickLoginButton => ({
  type: UserAction.USER_CLICK_LOGIN_BUTTON,
  payload: null,
});

/*-----------------------------------------------------
-----------------------------------------------------*/
export interface ClickLogoutButton extends Reducer<null> {}
//---------------------------------------------------//
export const clickLogoutButton = (): ClickLogoutButton => ({
  type: UserAction.USER_CLICK_LOGOUT_BUTTON,
  payload: null,
});

/*-----------------------------------------------------
-----------------------------------------------------*/
export interface ClickOutsideOfLoginPopup extends Reducer<null> {}
//---------------------------------------------------//
export const clickOutsideOfLoginPopup = (): ClickOutsideOfLoginPopup => ({
  type: UserAction.USER_CLICK_OUTSIDE_LOGIN_POPUP,
  payload: null,
});

/*-----------------------------------------------------
-----------------------------------------------------*/
export interface ChangeSearchInput extends Reducer<{ term: string }> {}
//---------------------------------------------------//
export const changeSearchInput = (term: string): ChangeSearchInput => ({
  type: UserAction.USER_CHANGE_SEARCH_INPUT,
  payload: { term },
});

/*-----------------------------------------------------
-----------------------------------------------------*/
export interface RemoveTag extends Reducer<{ tagName: string }> {}
//---------------------------------------------------//
export const removeTag = (tagName: string): RemoveTag => ({
  type: UserAction.USER_REMOVE_TAG,
  payload: { tagName },
});

/*-----------------------------------------------------
-----------------------------------------------------*/
export interface SubmitSearchBox extends Reducer<null> {}
//---------------------------------------------------//
export const submitSearchBox = (): SubmitSearchBox => ({
  type: UserAction.USER_SUBMIT_SEARCH_BOX,
  payload: null,
});

/*-----------------------------------------------------
-----------------------------------------------------*/
export interface ChangePage extends Reducer<{ page: number }> {}
//---------------------------------------------------//
export const changePage = (page: number): ChangePage => ({
  type: UserAction.USER_CHANGE_PAGE,
  payload: { page },
});

/*-----------------------------------------------------
-----------------------------------------------------*/
export interface ChangePageSize extends Reducer<{ pageSize: number }> {}
//---------------------------------------------------//
export const changePageSize = (pageSize: number): ChangePageSize => ({
  type: UserAction.USER_CHANGE_PAGE_SIZE,
  payload: { pageSize },
});
