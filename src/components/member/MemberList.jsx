import React from "react";
import MemberItem from "./MemberItem";
import styled from "styled-components";
import uuid from "react-uuid";

const MemberListWrap = styled.ul`
  display: flex;
  flex-flow: row wrap;
  justify-content: flex-start;
`;

const MemberList = ({ members, keyword, editMemberToggle, onDelete }) => {
  return (
    <MemberListWrap>
      {members
        // eslint-disable-next-line array-callback-return
        .filter(member => {
          if (keyword === "") {
            return member;
          } else if (member.name.includes(keyword)) {
            return member;
          }
        })
        .map(member => (
          <MemberItem
            key={uuid()}
            member={member}
            editMemberToggle={editMemberToggle}
            onDelete={onDelete}
          />
        ))}
    </MemberListWrap>
  );
};

export default MemberList;
