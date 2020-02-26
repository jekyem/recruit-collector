const SearchAction = {
  SET_SEARCH_TERM: "SET_SEARCH_TERM",
  SET_TAGS: "SET_TAGS"
};

export const setSearchTerm = (term: string) => {
  return {
    type: SearchAction.SET_SEARCH_TERM,
    payload: term
  };
};

export default SearchAction;
