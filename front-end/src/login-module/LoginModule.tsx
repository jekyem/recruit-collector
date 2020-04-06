import React from "react";
import NaverLogin from "./naver-login/NaverLogin";
import { useDispatch } from "react-redux";
import { setPageToken } from "reducers/oauth/action";
const LoginModule = () => {
  const pageToken = sessionStorage.getItem("pageToken");
  const dispatch = useDispatch();

  if (pageToken) {
    dispatch(setPageToken(pageToken));
    return null;
  }

  return (
    <>
      <NaverLogin />
    </>
  );
};

export default LoginModule;
