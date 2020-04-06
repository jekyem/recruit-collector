import React from "react";
import { useSelector, useDispatch } from "react-redux";

import LoginPopup from "components/popup/LoginPopup";
import { hideLoginPopup } from "reducers/oauth/action";
import { ReducerType } from "reducers";

const LoginPopupContainer = () => {
  const dispatch = useDispatch();
  const { token, openLoginPopup } = useSelector(
    ({ oauth }: ReducerType) => oauth
  );

  const onClickOutside = () => {
    dispatch(hideLoginPopup());
  };

  if (token !== null || openLoginPopup === false) return null;
  return <LoginPopup onClickOutside={onClickOutside} />;
};

export default LoginPopupContainer;
