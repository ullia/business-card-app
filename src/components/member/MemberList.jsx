import React from "react";
import MemberItem from "./MemberItem";
import styled from "styled-components";
import uuid from "react-uuid";

const MemberListWrap = styled.ul`
  display: flex;
  flex-flow: row wrap;
  justify-content: flex-start;
`;

const MemberSortWrap = styled.div`
  display: flex;
  width: 100%;
  flex-flow: row wrap;
  justify-content: flex-end;
  margin-bottom: 1em;
`;

const MemberList = ({ members, keyword, editMemberToggle, onDelete, onSort }) => {
  const onChange = e => {
    let value = e.target.value;
    memberSort(value);
  };

  const memberSort = value => {
    const sortObj = members;

    if (value === "") {
      return;
    } else if (value === "오름차순") {
      members.sort((a, b) => {
        const nameA = a.name.toString().toLowerCase();
        const nameB = b.name.toString().toLowerCase();
        return nameA < nameB ? -1 : nameA === nameB ? 0 : 1;
      });
    } else if (value === "내림차순") {
      members.sort((a, b) => {
        const nameA = a.name.toString().toLowerCase();
        const nameB = b.name.toString().toLowerCase();
        return nameB < nameA ? -1 : nameB === nameA ? 0 : 1;
      });
    } else if (value === "중요도순") {
      members.sort((a, b) => {
        const regex = /[^0-9]/g;
        const themeA = a.theme.replace(regex, "").toString();
        const themeB = b.theme.replace(regex, "").toString();
        console.log(themeA);
        console.log(themeB);
        return themeB - themeA;
      });
    } else if (value === "최신등록일순") {
      members.sort((a, b) => {
        const regex = /[^0-9]/g;
        const dateA = a.reportingDate.replace(regex, "").toString();
        const dateB = b.reportingDate.replace(regex, "").toString();
        return dateB - dateA;
      });
    }

    // console.log(sortObj);
    onSort(sortObj);
  };

  return (
    <MemberListWrap>
      <MemberSortWrap className="member__sort">
        <select name="" id="" onChange={e => onChange(e)}>
          <option value="">--정렬하기--</option>
          <option value="오름차순">오름차순</option>
          <option value="내림차순">내림차순</option>
          <option value="중요도순">중요도순</option>
          <option value="최신등록일순">최신등록일순</option>
        </select>
      </MemberSortWrap>

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
