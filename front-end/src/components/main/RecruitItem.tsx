import React from "react";
import styled from "styled-components";
import RecruitInfo from "model/RecruitInfo";

const Item = styled.li`
  display: flex;
  padding: 12px 0px;
  height: 100px;
  border-bottom: 1px solid #cccccc;
`;

const CompanyName = styled.div`
  margin-right: 20px;
  border-right: 1.5px solid black;
  width: 190px;
`;
const RecruitContnet = styled.a`
  display: flex;
  flex-direction: column;
  width: 100%;
  cursor: pointer;
  color: black;
  :hover {
    color: black;
  }
`;

const Row = styled.div`
  width: 100%;
  display: flex;
  flex: 1;
`;

const Status = styled.div`
  display: block;
  margin-left: auto;
  margin-right: 10px;
`;

interface PropsType {
  recruitInfo: RecruitInfo;
}

const RecruitItem = (props: PropsType) => {
  const { company, title, url, startDate, endDate } = props.recruitInfo;
  return (
    <Item>
      <CompanyName>{company}</CompanyName>
      <RecruitContnet href={url} target="_blank">
        <Row>
          <h2>{title}</h2>
          {/* <Status>모집 중</Status> */}
        </Row>
        {/* 타이틀  모집중, 종료 */}
        <Row>
          {" "}
          {startDate} ~ {endDate}
        </Row>
      </RecruitContnet>
    </Item>
  );
};

export default RecruitItem;
