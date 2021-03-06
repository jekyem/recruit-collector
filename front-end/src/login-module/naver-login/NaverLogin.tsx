import React, { useEffect } from "react";
import NaverToken from "./NaverToken";

interface Hash {
  [key: string]: string;
}

const getNaverToken = (href: string): NaverToken | undefined => {
  const headerIndex = href.indexOf("#");
  if (headerIndex < 0) return;

  const splitHeader = href.substr(headerIndex + 1).split("&");
  const headerHash: Hash = {};

  splitHeader.forEach((headStr) => {
    const keyValue = headStr.split("=");
    headerHash[keyValue[0]] = keyValue[1];
  });
  if (headerHash["access_token"] && headerHash["token_type"])
    return {
      token: headerHash["access_token"],
      type: headerHash["token_type"],
    };
};

interface PropsType {
  onTokenExist: (token: NaverToken) => void;
}

const NaverLogin = (props: PropsType) => {
  useEffect(() => {
    const url = window.location.href;
    const naverToken = getNaverToken(url);

    if (naverToken) {
      props.onTokenExist(naverToken);
      window.history.pushState(null, document.title, url.split("#")[0]);
    } else {
      const loginModule = new (window as any).naver.LoginWithNaverId({
        clientId: process.env.REACT_APP_NAVER_CLIENT_ID,
        isPopup: false,
        callbackHandle: true,
        callbackUrl: window.location.origin,
        loginButton: { color: "green", type: 3, height: 60 },
      });

      loginModule.init();
    }
  });

  return <div id="naverIdLogin" style={{ display: "none" }} />;
};

export const naverLogin = () => {
  document.getElementById("naverIdLogin_loginButton")?.click();
};

export default NaverLogin;
