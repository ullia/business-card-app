import React from "react";
import MemberItem from "./MemberItem";
import styled from "styled-components";

const MemberListWrap = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
`;

const MemberList = () => {
  return (
    <MemberListWrap>
      <MemberItem />
      <MemberItem />
      <MemberItem />
      <MemberItem />
      <MemberItem />
      <MemberItem />
      <MemberItem />
      <MemberItem />
      <MemberItem />
      <MemberItem />
    </MemberListWrap>
  );
};

export default MemberList;
