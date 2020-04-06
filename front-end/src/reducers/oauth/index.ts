import { OAuthAction } from "./action";

export interface OAuthStateType {
  token: string | null;
  openLoginPopup: boolean;
}

const initialState = {
  token: null,
  openLoginPopup: false,
};

const Recruits = (state: OAuthStateType = initialState, action: any) => {
  switch (action.type) {
    case OAuthAction.HIDE_LOGIN_POPUP: {
      return { ...state, openLoginPopup: false };
    }
    case OAuthAction.SHOW_LOGIN_POPUP: {
      return { ...state, openLoginPopup: true };
    }
    case OAuthAction.SET_PAGE_TOKEN: {
      return { ...state, token: action.payload.pageToken };
    }
    case OAuthAction.LOGOUT: {
      return { ...state, token: null };
    }
    default: {
      return state;
    }
  }
};

export default Recruits;
