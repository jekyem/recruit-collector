import {
  ChangeSearchInput,
  UserAction,
  RemoveTag,
  SubmitSearchBox,
} from "action/UserAction";

export interface SearchBoxReducer {
  term: string;
  tags: string[];
}

const initialState = {
  term: "",
  tags: ["tag1", "tag2", "tag3"],
};

const searchBoxReducer = (
  state: SearchBoxReducer = initialState,
  action: ChangeSearchInput | RemoveTag
): SearchBoxReducer => {
  switch (action.type) {
    case UserAction.USER_CHANGE_SEARCH_INPUT: {
      const { term } = (action as ChangeSearchInput).payload;
      return {
        ...state,
        term,
      };
    }
    case UserAction.USER_REMOVE_TAG: {
      const { tagName: removeTagName } = (action as RemoveTag).payload;
      return {
        ...state,
        tags: state.tags.filter((tag) => tag !== removeTagName),
      };
    }
    case UserAction.USER_SUBMIT_SEARCH_BOX: {
      const { term, tags } = state;
      if (term.substr(0, 1) === "#")
        return {
          ...state,
          term: "",
          tags: [...tags, term.substr(1)],
        };
      else return { ...state };
    }
    default: {
      return state;
    }
  }
};

export default searchBoxReducer;
