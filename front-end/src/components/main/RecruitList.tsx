import React, { useCallback, useState } from "react";
import styled from "styled-components";
import { Pagination } from "antd";

import RecruitItem from "./RecruitItem";
import RecruitInfo from "model/RecruitInfo";

const Wapper = styled.div`
  margin-bottom: 20px;
`;

const List = styled.ul`
  border-top: 3px solid #111111;
  list-style: none;
  padding: 0px;
`;

const PagingWapper = styled.div`
  display: flex;
  width: 100%;
`;

const MyPagination = styled(Pagination)`
  margin: 0px auto;
  li {
    margin: 0px 1px !important;
    font-size: 24px;
    a {
      color: #c0c0c0;
    }
  }
  .ant-pagination-disabled a {
    cursor: default !important;
  }
  svg {
    font-size: 18px;
  }
  .ant-pagination-item-active {
    background: none;
    border: none;
    a {
      color: #ff2984;
    }
  }
`;

interface PropsType {
  recruits: RecruitInfo[];
  total: number;
  movePage: (page: number, size: number) => void;
}

const RecruitList = (props: PropsType) => {
  const [page, setPage] = useState<number>(1);

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
          current={page}
          size="small"
          onChange={(page: number, pageSize?: number) => {
            if (pageSize) props.movePage(page, pageSize);
            setPage(page);
          }}
        />
      </PagingWapper>
    </Wapper>
  );
};

export default RecruitList;
