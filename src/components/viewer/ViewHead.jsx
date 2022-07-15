import React, { useRef, useState } from "react";
import { AiOutlineUserAdd } from "react-icons/ai";
import styled from "styled-components";

const ViewHeadWrap = styled.div`
  display: flex;
  align-items: center;
  height: 40px;
  background: transparent;
  border-bottom: 1px solid #ccc;
  margin-bottom: 2rem;
  h3 {
    display: inline-block;
    line-height: 40px;
    text-transform: uppercase;
  }
  .member_controls {
    margin-left: auto;
    .member__add {
      font-size: 28px;
      margin-right: 10px;
      vertical-align: middle;
      cursor: pointer;
    }
    input#member__search {
      height: 28px;
      padding: 0 10px;
      font: 400 0.9rem "NanumBarunGothic";
      color: #000;
    }
  }
`;

const ViewHead = ({ contTitle, search, listReset, onCreateMember }) => {
  // console.log(contTitle);

  const searchRef = useRef();

  const onKeyPress = e => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };

  const handleSearch = () => {
    const value = searchRef.current.value;
    // alert(value);
    if (!value) {
      listReset();
    }
    search(value);
  };

  return (
    <ViewHeadWrap>
      <h3>{contTitle}</h3>
      {contTitle === "member" ? (
        <div className="member_controls">
          <AiOutlineUserAdd className="member__add" onClick={onCreateMember} />
          <input
            ref={searchRef}
            type="search"
            placeholder="...Search"
            id="member__search"
            onKeyPress={onKeyPress}
          />
        </div>
      ) : null}
    </ViewHeadWrap>
  );
};

export default ViewHead;
