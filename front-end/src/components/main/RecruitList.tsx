import React, { useCallback } from "react";
import styled from "styled-components";
import { Pagination } from "antd";

import RecruitItem from "./RecruitItem";
import RecruitInfo from "model/RecruitInfo";

const Wapper = styled.div`
  margin-bottom: 20px;
`;

const List = styled.ul`
  border-top: 1.5px solid #1f4e5f;
  border-bottom: 1.5px solid #1f4e5f;
  list-style: none;
  padding: 0px;
`;

const PagingWapper = styled.div`
  display: flex;
  width: 100%;
`;

const MyPagination = styled(Pagination)`
  margin: 0px auto;
`;

interface PropsType {
  recruits: RecruitInfo[];
  total: number;
  movePage: (page: number, size: number) => void;
}

const RecruitList = (props: PropsType) => {
  const items = useCallback(() => {
    return props.recruits.map((data, index: number) => (
      <RecruitItem key={index} recruitInfo={data} />
    ));
  }, [props.recruits])();

  return (
    <Wapper>
      <List>{items}</List>
      <PagingWapper>
        <MyPagination
          total={props.total}
          onChange={(page: number, pageSize?: number) => {
            if (pageSize) props.movePage(page, pageSize);
          }}
          showSizeChanger
        />
      </PagingWapper>
    </Wapper>
  );
};

export default RecruitList;
