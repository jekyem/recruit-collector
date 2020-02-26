import React, { useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";

import RecruitList from "components/main/RecruitList";
import { ReducerType } from "reducers";
import { requestRecruit } from "reducers/recruit/action";

const RecruitListContainer = () => {
  const recruit = useSelector(({ recruit }: ReducerType) => recruit);
  const searchParm = useSelector(({ search }: ReducerType) => search);
  const dispatch = useDispatch();

  const movePage = useCallback(
    (page: number, size: number) => {
      const offset = (page - 1) * size;
      dispatch(requestRecruit(searchParm.term, offset, size));
    },
    [dispatch, searchParm.term]
  );

  return (
    <RecruitList
      recruits={recruit.pageList}
      total={recruit.total}
      movePage={movePage}
    />
  );
};

export default RecruitListContainer;
