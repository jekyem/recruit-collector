import React, { useState, useCallback } from "react";
import styled from "styled-components";
import { Input } from "antd";
import KeyWord from "./KeyWord";

const Wapper = styled.div`
  margin: 20px 0px;
`;

const Search = styled(Input.Search)`
  height: 40px;
  margin-bottom: 10px;

  input {
    font-size: 20px;
    font-weight: bold;
    padding-left: 20px;
    border-radius: 0px;
    ::placeholder {
      color: #dfdfdf;
    }
    :focus {
      box-shadow: none;
    }
  }

  svg {
    color: #ff2984;
    font-size: 22px;
  }
`;

interface PropsType {
  term: string;
  tags: string[];
  onChangeInput: (term: string) => void;
  onClickRemoveTag: (tagName: string) => void;
  onSearch: (term: string, tags: string[]) => void;
}

const SearchBox = (props: PropsType) => {
  const { term, tags } = props;
  const { onChangeInput, onClickRemoveTag, onSearch } = props;

  const KeyWordComponents = tags.map((tag: string, index: number) => {
    const colors = ["#FF2984", "#FF295B", "#FF2929"];

    return (
      <KeyWord
        key={`search-tag-${index}`}
        keyWord={tag}
        removeKeyWord={onClickRemoveTag}
        color={colors[index % colors.length]}
      />
    );
  });

  return (
    <Wapper>
      <Search
        value={term}
        onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
          onChangeInput(event.currentTarget.value)
        }
        onSearch={() => onSearch(term, tags)}
        placeholder="Search"
      />
      {KeyWordComponents}
    </Wapper>
  );
};

export default SearchBox;
