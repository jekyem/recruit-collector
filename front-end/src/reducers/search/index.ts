import SearchAction from "./action";

export interface SearchStateType {
  term: string;
  tags: string[];
}

const initialState = {
  term: "",
  tags: []
};

const reducer = (
  state: SearchStateType = initialState,
  action: any
): SearchStateType => {
  switch (action.type) {
    case SearchAction.SET_SEARCH_TERM: {
      return {
        ...state,
        term: action.payload
      };
    }
    default: {
      return state;
    }
  }
};

export default reducer;
