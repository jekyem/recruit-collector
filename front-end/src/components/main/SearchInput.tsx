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
  /* & > .ant-input {
    border: 2px solid black;
  } */
`;

interface PropsType {
  keyWords: string[];
  search: (searchTerm: string) => boolean;
  removeKeyWord: (keyWord: string) => void;
}

const SearchInput = (props: PropsType) => {
  const [term, setTerm] = useState<string>("");
  const { keyWords } = props;

  const KeyWordComponents = useCallback(() => {
    return keyWords.map((keyword: string, index: number) => (
      <KeyWord
        key={index}
        keyWord={keyword}
        removeKeyWord={props.removeKeyWord}
      />
    ));
  }, [keyWords, props.removeKeyWord])();

  return (
    <Wapper>
      <Search
        value={term}
        onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
          setTerm(event.currentTarget.value)
        }
        onSearch={() => {
          const initializeTerm = props.search(term);
          if (initializeTerm) setTerm("");
        }}
      />
      {KeyWordComponents}
    </Wapper>
  );
};

export default SearchInput;
