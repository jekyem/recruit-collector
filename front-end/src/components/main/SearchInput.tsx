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

  /* font-weight: bold; */

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
    return keyWords.map((keyword: string, index: number) => {
      const colors = ["#FF2984", "#FF295B", "#FF2929"];
      return (
        <KeyWord
          key={index}
          keyWord={keyword}
          removeKeyWord={props.removeKeyWord}
          color={colors[index % colors.length]}
        />
      );
    });
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
        placeholder="Search"
      />
      {KeyWordComponents}
    </Wapper>
  );
};

export default SearchInput;
