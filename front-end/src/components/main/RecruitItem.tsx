import React from "react";
import styled from "styled-components";
import RecruitInfo from "model/RecruitInfo";

const Item = styled.li`
  display: flex;
  padding: 12px 0px;
  min-height: 90px;
  border-bottom: 1px solid #cccccc;
`;

const CompanyName = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 16px;
  font-weight: bold;
  width: 300px;
`;

const RecruitContnet = styled.a`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  padding-left: 30px;
  color: black;
  cursor: pointer;
  :hover {
    color: black;
  }
`;
const Row = styled.div`
  width: 100%;
`;

const Title = styled.span`
  font-size: 16px;
  font-weight: 500;
  margin: 0px;
`;

const DueDate = styled.span`
  font-size: 14px;
  color: #969696;
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
          <Title>{title}</Title>
        </Row>
        <Row>
          <DueDate>
            모집기간 | {startDate} ~ {endDate}
          </DueDate>
        </Row>
      </RecruitContnet>
    </Item>
  );
};

export default RecruitItem;
