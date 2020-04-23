import React from "react";
import Header from "components/layout/Header";
import MenuItem from "components/layout/MenuItem";
import { useSelector, useDispatch } from "react-redux";
import { RootReducer } from "reducers";
import { Dispatch } from "redux";
import { clickLoginButton, clickLogoutButton } from "action/UserAction";

const makeLoginItem = (token: string | null, dispatch: Dispatch<any>) => {
  return token ? (
    <MenuItem
      key="LogoutMenu"
      label="로그아웃"
      onClick={() => {
        sessionStorage.removeItem("pageToken");
        dispatch(clickLogoutButton());
      }}
    />
  ) : (
    <MenuItem
      key="LoginMenu"
      label="로그인"
      onClick={() => {
        dispatch(clickLoginButton());
      }}
    />
  );
};

const HeaderContainer = () => {
  const dispatch = useDispatch();
  const { token } = useSelector(({ pageReducer }: RootReducer) => pageReducer);
  const MenuItmes: React.ReactNode[] = [];

  MenuItmes.push(makeLoginItem(token, dispatch));

  return <Header MenuItems={MenuItmes} />;
};

export default HeaderContainer;
