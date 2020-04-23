import React, { useCallback, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import RecruitList from "components/main/RecruitList";
import { RootReducer } from "reducers";
import { initializeRecruitList } from "action/PageAction";
import { changePage, changePageSize } from "action/UserAction";

const RecruitListContainer = () => {
  const { recruits, total, isLoding, page, pageSize } = useSelector(
    ({ recruitListReducer }: RootReducer) => recruitListReducer
  );
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(initializeRecruitList());
  }, [dispatch]);

  return (
    <RecruitList
      isLoding={isLoding}
      recruits={recruits}
      total={total}
      page={page}
      pageSize={pageSize}
      onChangePage={(page: number) => {
        dispatch(changePage(page));
      }}
      onChangePageSize={(pageSize: number) => {
        dispatch(changePageSize(pageSize));
      }}
    />
  );
};

export default RecruitListContainer;
