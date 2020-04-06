import React from "react";
import styled from "styled-components";

const Wapper = styled.div`
  box-sizing: border-box;
  background-color: #f2f2f2;
  height: 70px;
  width: 100%;
`;

const Inner = styled.div`
  box-sizing: border-box;
  padding-top: 20px;
  display: flex;
  width: 85%;
  max-width: 1000px;
  margin: 0px auto;
`;

const Logo = styled.div`
  margin-top: -8px;
  font-size: 24px;
  font-weight: bold;
  cursor: pointer;
  user-select: none;
`;

const Menu = styled.ul`
  display: flex;
  padding: 0px;
  margin: 0px;
  margin-left: auto;
  list-style: none;
`;

interface PropsType {
  MenuItems: React.ReactNode[];
}

const Header = (props: PropsType) => {
  const { MenuItems } = props;

  return (
    <Wapper>
      <Inner>
        <Logo>LOGO</Logo>
        <Menu>{MenuItems}</Menu>
      </Inner>
    </Wapper>
  );
};

export default Header;
