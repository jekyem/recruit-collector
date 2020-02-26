import React from "react";
import styled from "styled-components";

const Wapper = styled.div`
  width: 100%;
  height: 100%;
  overflow: auto;
`;

const Inner = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  min-height: 100%;
`;

interface PropsTypes {
  children?: React.ReactNode;
}

const Content = (props: PropsTypes) => (
  <Wapper>
    <Inner>{props.children}</Inner>
  </Wapper>
);

export default Content;
