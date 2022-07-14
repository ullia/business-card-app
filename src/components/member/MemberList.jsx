import React from "react";
import MemberItem from "./MemberItem";
import styled from "styled-components";

const MemberListWrap = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

const MemberList = ({ members }) => {
  return (
    <MemberListWrap>
      {members.map(member => (
        <MemberItem member={member} />
      ))}
    </MemberListWrap>
  );
};

export default MemberList;
