import React, { useRef, useEffect } from "react";
import styled from "styled-components";

import { naverLogin } from "login-module/naver-login/NaverLogin";
import naverBtnImg from "img/naver_btn_green.png";

const Wapper = styled.div`
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 10;
  top: 0px;
  left: 0px;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.25);
`;

const Pupup = styled.div`
  width: 300px;
  height: 230px;
  background-color: white;
  padding: 20px;
`;

const NaverButton = styled.div`
  width: 100%;
  padding: 5px 5px;
  cursor: pointer;
`;

const NaverImage = styled.img.attrs({ src: naverBtnImg })`
  width: 100%;
  height: auto;
`;

const Title = styled.div`
  text-align: center;
  font-size: 32px;
  font-weight: bold;
  margin-bottom: 20px;
`;

const LoginText = styled.div`
  padding: 0px 10px 15px 10px;
  border-bottom: 1px solid black;
  margin-bottom: 15px;
`;

interface PropsType {
  onClickOutside: () => void;
}

const LoginPopup = (props: PropsType) => {
  const popupRef = useRef<HTMLDivElement>(null);

  const handleClickOutside = (e: MouseEvent) => {
    if (
      !(
        e.target &&
        e.target instanceof Node &&
        popupRef.current?.contains(e.target)
      )
    ) {
      props.onClickOutside();
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  });

  return (
    <Wapper>
      <Pupup ref={popupRef}>
        <Title> 로그인 </Title>
        <LoginText> 관심있는 채용 공고를 관리 해보세요. </LoginText>
        <NaverButton
          onClick={() => {
            naverLogin();
          }}
        >
          <NaverImage />
        </NaverButton>
      </Pupup>
    </Wapper>
  );
};

export default LoginPopup;
