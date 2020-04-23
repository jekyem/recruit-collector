import RecruitInfo from "model/RecruitInfo";
import {
  SagaAction,
  SuccessSearchRecruits,
  RequestSearchRecruits,
  RequestChangePage,
  SuccessChangePage,
} from "action/SagaAction";
import { UserAction, ChangePage, ChangePageSize } from "action/UserAction";

export interface RecruitListReducer {
  isLoding: boolean;
  recruits: RecruitInfo[];
  total: number;
  page: number;
  pageSize: number;
}

const initialState = {
  isLoding: false,
  recruits: [],
  total: 0,
  page: 1,
  pageSize: 10,
};

const recruitListReducer = (
  state: RecruitListReducer = initialState,
  action:
    | RequestSearchRecruits
    | RequestChangePage
    | SuccessSearchRecruits
    | SuccessChangePage
    | ChangePage
    | ChangePageSize
): RecruitListReducer => {
  switch (action.type) {
    case SagaAction.REQUEST_SEARCH_RECRUITS:
    case SagaAction.REQUEST_CHANGE_PAGE: {
      return { ...state, isLoding: true };
    }
    case SagaAction.SUCCESS_SEARCH_RECRUITS: {
      const { recruits, total } = (action as SuccessSearchRecruits).payload;
      return { ...state, isLoding: false, recruits, total, page: 1 };
    }
    case SagaAction.SUCCESS_CHANGE_PAGE: {
      const { recruits, total } = (action as SuccessSearchRecruits).payload;
      return { ...state, isLoding: false, recruits, total };
    }
    case UserAction.USER_CHANGE_PAGE: {
      const { page } = (action as ChangePage).payload;
      return { ...state, page };
    }
    case UserAction.USER_CHANGE_PAGE_SIZE: {
      const { pageSize } = (action as ChangePageSize).payload;
      return { ...state, page: 1, pageSize };
    }
    default: {
      return state;
    }
  }
};

export default recruitListReducer;
