import React from "react";
import { Routes, Route } from "react-router-dom";
import styled from "styled-components";
import Home from "../home/Home";
import MemberDetail from "../member/MemberDetail";
import MemberList from "../member/MemberList";
import TodoList from "../todolist/TodoList";

const ViewBodyWrap = styled.div`
  margin: 2em 0;
  height: 100%;
  background: #ccc;
`;

const ViewBody = ({ members }) => {
  return (
    <Routes element={<ViewBodyWrap />}>
      <Route path="/home" element={<Home />} />
      <Route path="/member" element={<MemberList members={members} />} />
      <Route path="/todo" element={<TodoList />} />
      <Route path="/memberdetail" element={<MemberDetail />} />
    </Routes>
  );
};

export default ViewBody;
