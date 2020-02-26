import RecruitInfo from "model/RecruitInfo";
import RecruitAction from "./action";

export interface RecruitStateType {
  pageList: RecruitInfo[];
  total: number;
}

const initialState = {
  pageList: [],
  total: 0
};

const Recruits = (state: RecruitStateType = initialState, action: any) => {
  switch (action.type) {
    case RecruitAction.GET_RECRUITS_SUCCESS: {
      return action.payload;
    }
    default: {
      return state;
    }
  }
};

export default Recruits;
