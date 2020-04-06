import React from "react";
import styled from "styled-components";

const Wapper = styled.li`
  margin-left: 12px;
  padding: 0px 8px;
  cursor: pointer;
  :hover {
    border-bottom: 2px solid #1f4e5f;
  }
`;

interface PropsType {
  label: string;
  onClick?: () => void;
}

const MenuItem = (props: PropsType) => {
  return (
    <Wapper
      onClick={() => {
        props.onClick && props.onClick();
      }}
    >
      {props.label}
    </Wapper>
  );
};

export default MenuItem;
