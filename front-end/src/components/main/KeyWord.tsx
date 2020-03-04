import React from "react";
import styled from "styled-components";
import { Icon } from "antd";

const Wapper = styled.div<{ backgroundColor: string }>`
  display: inline-block;
  background-color: ${({ backgroundColor }) => backgroundColor};
  color: white;
  font-weight: bold;
  border-radius: 20px;
  padding: 5px 13px;
  cursor: default;
  margin-right: 8px;
  margin-bottom: 5px;
`;

const CloseIcon = styled(Icon).attrs({ type: "close" })`
  margin-left: 7px;
  font-weight: bold;
  opacity: 0.5;
  cursor: pointer;
  :hover {
    opacity: 1;
  }
`;

interface PropsType {
  keyWord: string;
  removeKeyWord: (keyWord: string) => void;
  color?: string;
}

const KeyWord = (props: PropsType) => {
  const backgroundColor = props.color ? props.color : "#FF2984";
  return (
    <Wapper backgroundColor={backgroundColor}>
      {props.keyWord}
      <CloseIcon onClick={() => props.removeKeyWord(props.keyWord)} />
    </Wapper>
  );
};

export default KeyWord;
