import React, { useCallback, useState } from "react";
import styled from "styled-components";
import { Pagination, Skeleton } from "antd";

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
  isLoding: boolean;
  recruits: RecruitInfo[];
  total: number;
  page: number;
  pageSize: number;
  onChangePage: (page: number) => void;
  onChangePageSize: (pageSize: number) => void;
}

const RecruitList = (props: PropsType) => {
  const items = useCallback(() => {
    return props.recruits.map((data, index: number) => (
      <RecruitItem key={index} recruitInfo={data} />
    ));
  }, [props.recruits])();

  if (props.isLoding) {
    return (
      <Wapper>
        <List>
          <li>
            <Skeleton active />
          </li>
          <li>
            <Skeleton active />
          </li>
          <li>
            <Skeleton active />
          </li>
        </List>
      </Wapper>
    );
  }

  const onChange = (page: number, pageSize?: number) => {
    if (props.page !== page) props.onChangePage(page);
    else if (pageSize && props.pageSize !== pageSize)
      props.onChangePageSize(page);
  };

  return (
    <Wapper>
      <List>{items}</List>
      <PagingWapper>
        <MyPagination
          total={props.total}
          current={props.page}
          pageSize={props.pageSize}
          size="small"
          onChange={onChange}
        />
      </PagingWapper>
    </Wapper>
  );
};

export default RecruitList;
