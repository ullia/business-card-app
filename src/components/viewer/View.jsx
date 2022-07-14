import React from "react";
import styled from "styled-components";
import ViewHead from "./ViewHead";
import ViewBody from "./ViewBody";

const ViewWrap = styled.section`
  display: flex;
  flex-flow: column;
  width: 100%;
  min-width: calc(1600px - 270px);
  padding: 1em;
  margin-left: 270px;
`;

const View = ({ contTitle, members }) => {
  return (
    <ViewWrap>
      <ViewHead contTitle={contTitle} />
      <ViewBody members={members} />
    </ViewWrap>
  );
};

export default View;
