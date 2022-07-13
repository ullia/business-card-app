import React from "react";
import styled from "styled-components";

const ViewHeadWrap = styled.div`
  height: 40px;
  background: transparent;
  border-bottom: 1px solid #ccc;
  h3 {
    line-height: 40px;
  }
`;

const ViewHead = () => {
  return (
    <ViewHeadWrap>
      <h3>Home</h3>
    </ViewHeadWrap>
  );
};

export default ViewHead;
