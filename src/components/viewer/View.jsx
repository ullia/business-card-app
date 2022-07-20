import React, { useRef, useState } from "react";
import styled from "styled-components";
import { AiOutlineUserAdd } from "react-icons/ai";
import { Routes, Route } from "react-router-dom";
import Home from "../home/Home";
import MemberCreate from "../member/MemberCreate";
import MemberEdit from "../member/MemberEdit";
import MemberList from "../member/MemberList";
import TodoList from "../todolist/TodoList";

const ViewWrap = styled.section`
  position: relative;
  display: flex;
  flex-flow: column;
  width: 100%;
  height: 100vh;
  padding: 1em;
  margin-left: 270px;
`;

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

const ViewBodyWrap = styled.div`
  margin: 2em 0;
  height: 100%;
  background: #ccc;
  height: 100%;
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

const View = ({ contTitle, members, search, onAdd, onEdit, onDelete }) => {
  const searchRef = useRef();
  const [createMemberStatus, setCreateMemberStatus] = useState(false);
  const [editMemberStatus, setEditMemberStatus] = useState(false);
  const [editObj, setEditObj] = useState();

  // const onKeyPress = e => {
  //   if (e.key === "Enter") {
  //     handleSearch();
  //   }
  // };

  // const handleSearch = () => {
  //   const value = searchRef.current.value;
  //   search(value);
  // };

  const [keyword, setKeyword] = useState("");

  const createMemberToggle = () => {
    setCreateMemberStatus(!createMemberStatus);
  };
  const editMemberToggle = id => {
    setEditMemberStatus(!editMemberStatus);

    const editMember = members.filter(member => member.id === id);
    setEditObj(editMember);
  };

  return (
    <ViewWrap>
      <ViewHeadWrap>
        <h3>{contTitle}</h3>
        {contTitle === "member" ? (
          <div className="member_controls">
            <AiOutlineUserAdd className="member__add" onClick={createMemberToggle} />
            <input
              ref={searchRef}
              type="search"
              placeholder="...Search"
              id="member__search"
              // onKeyPress={onKeyPress}
              onChange={e => setKeyword(e.target.value)}
            />
          </div>
        ) : null}
      </ViewHeadWrap>

      <Routes element={<ViewBodyWrap />}>
        <Route path="/home" element={<Home />} />
        <Route
          path="/member"
          element={
            <MemberList
              members={members}
              keyword={keyword}
              editMemberToggle={editMemberToggle}
              onDelete={onDelete}
            />
          }
        />
        <Route path="/todo" element={<TodoList />} />
      </Routes>
      {createMemberStatus === true && (
        <MemberCreate createMemberToggle={createMemberToggle} onAdd={onAdd} />
      )}
      {editMemberStatus === true && (
        <MemberEdit member={editObj[0]} editMemberToggle={editMemberToggle} onEdit={onEdit} />
      )}
      {createMemberStatus && <Overlay onClick={createMemberToggle} />}
      {editMemberStatus && <Overlay onClick={editMemberToggle} />}
    </ViewWrap>
  );
};

export default View;
