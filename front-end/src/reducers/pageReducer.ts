import {
  ClickLoginButton,
  ClickLogoutButton,
  UserAction,
} from "action/UserAction";
import { SagaAction, SuccessLogin } from "action/SagaAction";
import { PageAction, GetAccessTokenAtSessionStorage } from "action/PageAction";

export interface PageReducer {
  visiableLoginPopup: boolean;
  token: null | string;
}

const initialState = {
  visiableLoginPopup: false,
  token: null,
};

const PageReducer = (
  state: PageReducer = initialState,
  action:
    | ClickLoginButton
    | ClickLogoutButton
    | SuccessLogin
    | GetAccessTokenAtSessionStorage
) => {
  switch (action.type) {
    case UserAction.USER_CLICK_LOGIN_BUTTON: {
      return {
        ...state,
        visiableLoginPopup: true,
      };
    }
    case UserAction.USER_CLICK_LOGOUT_BUTTON: {
      sessionStorage.removeItem("access-token");
      return {
        ...state,
        token: null,
      };
    }
    case UserAction.USER_CLICK_OUTSIDE_LOGIN_POPUP: {
      return {
        ...state,
        visiableLoginPopup: false,
      };
    }
    case SagaAction.SUCCESS_LOGIN: {
      const { token } = (action as SuccessLogin).payload;
      sessionStorage.setItem("access-token", token);
      return {
        ...state,
        token,
      };
    }
    case PageAction.PAGE_GET_ACCESS_TOKEN_AT_SESSION_STORAGE: {
      const { token } = (action as GetAccessTokenAtSessionStorage).payload;
      return {
        ...state,
        token,
      };
    }
    default: {
      return state;
    }
  }
};

export default PageReducer;
