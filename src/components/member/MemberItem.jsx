import React from "react";
import styled from "styled-components";

const MemberItemWrap = styled.li`
  width: 49%;
  height: 250px;
  background: #b2b2b2;
  margin-bottom: 1%;
  border-radius: 10px;
`;

const MemberItem = () => {
  return <MemberItemWrap>Member Item</MemberItemWrap>;
};

export default MemberItem;
