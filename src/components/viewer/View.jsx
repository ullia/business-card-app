import React from "react";
import styled from "styled-components";
import ViewHead from "./ViewHead";
import ViewBody from "./ViewBody";

const ViewWrap = styled.section`
  position: relative;
  display: flex;
  flex-flow: column;
  width: 100%;
  height: 100vh;
  padding: 1em;
  margin-left: 270px;
`;

const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  width: 100%;
  height: 100%;
  z-index: 3;
  background-color: rgba(0, 0, 0, 0.7);
`;

const View = ({ contTitle, members, search, onCreateMember, createMember, onAdd }) => {
  return (
    <ViewWrap>
      <ViewHead contTitle={contTitle} search={search} onCreateMember={onCreateMember} />
      <ViewBody
        members={members}
        createMember={createMember}
        onCreateMember={onCreateMember}
        onAdd={onAdd}
      />
      {createMember && <Overlay />}
    </ViewWrap>
  );
};

export default View;
