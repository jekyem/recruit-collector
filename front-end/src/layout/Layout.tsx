import React from "react";
import styled from "styled-components";

import Header from "components/layout/Header";
import Footer from "components/layout/Footer";
import Content from "components/layout/Content";

import "antd/dist/antd.css";

const Wapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;
`;

interface PropsType {
  children?: React.ReactNode;
}

const Layout = (props: PropsType) => (
  <Wapper>
    <Header />
    <Content>
      {props.children}
      <Footer />
    </Content>
  </Wapper>
);

export default Layout;
