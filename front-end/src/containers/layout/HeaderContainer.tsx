import React from "react";
import Header from "components/layout/Header";
import MenuItem from "components/layout/MenuItem";
import { useSelector, useDispatch, createDispatchHook } from "react-redux";
import { ReducerType } from "reducers";
import { Dispatch } from "redux";
import { showLoginPopup, logout } from "reducers/oauth/action";

const makeLoginItem = (token: string | null, dispatch: Dispatch<any>) => {
  return token ? (
    <MenuItem
      key="LogoutMenu"
      label="로그아웃"
      onClick={() => {
        sessionStorage.removeItem("pageToken");
        dispatch(logout());
      }}
    />
  ) : (
    <MenuItem
      key="LoginMenu"
      label="로그인"
      onClick={() => {
        dispatch(showLoginPopup());
      }}
    />
  );
};

const HeaderContainer = () => {
  const dispatch = useDispatch();
  const { token } = useSelector(({ oauth }: ReducerType) => oauth);
  const MenuItmes: React.ReactNode[] = [];

  MenuItmes.push(makeLoginItem(token, dispatch));

  return <Header MenuItems={MenuItmes} />;
};

export default HeaderContainer;
