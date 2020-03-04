import React, { useState, useCallback, useEffect } from "react";
import SearchInput from "components/main/SearchInput";
import { useDispatch } from "react-redux";
import { requestRecruit } from "reducers/recruit/action";
import { setSearchTerm } from "reducers/search/action";

const SearchContainer = () => {
  const dispatch = useDispatch();
  const [tags, setTags] = useState<string[]>([]);

  const search = useCallback(
    (searchTerm: string): boolean => {
      if (searchTerm.substr(0, 1) === "#") {
        tags.push(searchTerm);
        setTags(Array.from(new Set(tags)));
        return true;
      } else {
        dispatch(setSearchTerm(searchTerm));
        dispatch(requestRecruit(searchTerm, 0, 10));
        return false;
      }
    },
    [dispatch, tags]
  );

  const removeKeyWord = useCallback(
    (keyWord: string) => {
      setTags(tags.filter((term: string) => term !== keyWord));
    },
    [tags]
  );

  useEffect(() => {
    dispatch(requestRecruit("", 0, 10));
  }, [dispatch]);

  return (
    <SearchInput
      keyWords={tags}
      search={search}
      removeKeyWord={removeKeyWord}
    />
  );
};

export default SearchContainer;
