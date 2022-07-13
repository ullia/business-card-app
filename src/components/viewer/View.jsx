import React from "react";
import styled from "styled-components";
import ViewHead from "./ViewHead";
import ViewBody from "./ViewBody";

const ViewWrap = styled.section`
  display: flex;
  flex-flow: column;
  width: 100%;
  padding: 1em;
  margin-left: 270px;
`;

const View = () => {
  return (
    <ViewWrap>
      <ViewHead />
      <ViewBody />
    </ViewWrap>
  );
};

export default View;
