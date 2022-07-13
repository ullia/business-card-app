import React from "react";
import styled from "styled-components";
import MemberList from "../member/MemberList";

const ViewBodyWrap = styled.div`
  margin: 2em 0;
  height: 100%;
  background: #ccc;
`;

const ViewBody = () => {
  return (
    <ViewBodyWrap>
      <MemberList />
    </ViewBodyWrap>
  );
};

export default ViewBody;
