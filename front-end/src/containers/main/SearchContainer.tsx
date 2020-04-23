import React, { useEffect } from "react";
import SearchBox from "components/main/SearchBox";
import { useDispatch, useSelector } from "react-redux";

import { RootReducer } from "reducers";
import {
  changeSearchInput,
  submitSearchBox,
  removeTag,
} from "action/UserAction";

const SearchContainer = () => {
  const { term, tags } = useSelector(
    ({ searchBoxReducer }: RootReducer) => searchBoxReducer
  );
  const dispatch = useDispatch();

  return (
    <SearchBox
      term={term}
      tags={tags}
      onChangeInput={(term: string) => {
        dispatch(changeSearchInput(term));
      }}
      onClickRemoveTag={(tag: string) => {
        dispatch(removeTag(tag));
      }}
      onSearch={(term: string, tags: string[]) => {
        dispatch(submitSearchBox());
      }}
    />
  );
};

export default SearchContainer;
