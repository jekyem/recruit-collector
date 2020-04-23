import React from "react";
import NaverLogin from "./naver-login/NaverLogin";
import { useDispatch } from "react-redux";
import NaverToken from "./naver-login/NaverToken";
import {
  getLoginToken,
  GetAccessTokenAtSessionStorage,
} from "action/PageAction";

const LoginModule = () => {
  const pageToken = sessionStorage.getItem("access-token");
  const dispatch = useDispatch();

  if (pageToken) {
    dispatch(GetAccessTokenAtSessionStorage(pageToken));
    return null;
  }

  return (
    <>
      <NaverLogin
        onTokenExist={(naverToken: NaverToken) => {
          dispatch(getLoginToken("naver", naverToken));
        }}
      />
    </>
  );
};

export default LoginModule;
