import React from "react";
import { useSelector, useDispatch } from "react-redux";

import LoginPopup from "components/popup/LoginPopup";
import { RootReducer } from "reducers";
import { clickOutsideOfLoginPopup } from "action/UserAction";

const LoginPopupContainer = () => {
  const dispatch = useDispatch();
  const { visiableLoginPopup, token } = useSelector(
    ({ pageReducer }: RootReducer) => pageReducer
  );

  const onClickOutside = () => {
    dispatch(clickOutsideOfLoginPopup());
  };

  if (token !== null || visiableLoginPopup === false) return null;
  return <LoginPopup onClickOutside={onClickOutside} />;
};

export default LoginPopupContainer;
