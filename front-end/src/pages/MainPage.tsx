import React from "react";

import styled from "styled-components";
import SearchContainer from "containers/main/SearchContainer";
import RecruitListContainer from "containers/main/RecruitListContainer";

const Wapper = styled.div`
  width: 85%;
  max-width: 1000px;
  margin: 0px auto;
`;

const MainPage = () => {
  return (
    <Wapper>
      <SearchContainer />
      <RecruitListContainer />
    </Wapper>
  );
};

export default MainPage;
