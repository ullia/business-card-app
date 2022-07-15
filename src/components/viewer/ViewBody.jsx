import React from "react";
import { Routes, Route } from "react-router-dom";
import styled from "styled-components";
import Home from "../home/Home";
import MemberCreate from "../member/MemberCreate";
import MemberEdit from "../member/MemberEdit";
import MemberList from "../member/MemberList";
import TodoList from "../todolist/TodoList";

const ViewBodyWrap = styled.div`
  margin: 2em 0;
  height: 100%;
  background: #ccc;
`;

const ViewBody = ({ members, createMember }) => {
  return (
    <>
      <Routes element={<ViewBodyWrap />}>
        <Route path="/home" element={<Home />} />
        <Route path="/member" element={<MemberList members={members} />} />
        <Route path="/todo" element={<TodoList />} />
        <Route path="/memberdetail" element={<MemberEdit members={members} />} />
      </Routes>
      {createMember === true && <MemberCreate />}
    </>
  );
};

export default ViewBody;
