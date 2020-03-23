import React, { useCallback } from "react";
import styled from "styled-components";
import RecruitInfo from "model/RecruitInfo";
import moment from "moment";

const Item = styled.li`
  display: flex;
  padding: 12px 0px;
  min-height: 90px;
  border-bottom: 1px solid #cccccc;
  cursor: pointer;
`;

const CompanyName = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  font-size: 16px;
  font-weight: bold;
  max-width: 300px;
  width: 30%;
`;

const RecruitContnet = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  padding-left: 30px;
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

const Status = styled.div`
  display: flex;
  align-items: center;
  width: 75px;
  color: #ff2984;
  font-weight: bold;
`;

interface PropsType {
  recruitInfo: RecruitInfo;
}

const RecruitItem = (props: PropsType) => {
  const {
    company,
    title,
    url,
    startDate,
    endDate,
    pageIsOpen
  } = props.recruitInfo;
  const NULL_DATE = "Invalid date";

  const isRecruitmentClosed = useCallback(
    (pageIsOpen: number, endDate?: string) => {
      return pageIsOpen > 0 &&
        (endDate === NULL_DATE ||
          moment(endDate, "YYYY-MM-DD HH:mm:ss") > moment())
        ? "진행중"
        : "마감";
    },
    []
  );

  return (
    <Item
      onClick={() => {
        window.open(url, "_blank");
      }}
    >
      <CompanyName>{company}</CompanyName>
      <RecruitContnet>
        <Row>
          <Title>{title}</Title>
        </Row>
        <Row>
          <DueDate>
            모집기간 | {startDate} ~ {endDate !== NULL_DATE ? endDate : ""}
          </DueDate>
        </Row>
      </RecruitContnet>
      <Status>{isRecruitmentClosed(pageIsOpen, endDate)}</Status>
    </Item>
  );
};

export default RecruitItem;
