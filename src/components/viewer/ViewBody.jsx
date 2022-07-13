import React from "react";
import { Routes, Route } from "react-router-dom";
import styled from "styled-components";
import ContactMe from "../contact/ContactMe";
import Home from "../home/Home";
import MemberList from "../member/MemberList";
import TodoList from "../todolist/TodoList";

const ViewBodyWrap = styled.div`
  margin: 2em 0;
  height: 100%;
  background: #ccc;
`;

const ViewBody = () => {
  return (
    <Routes element={<ViewBodyWrap />}>
      <Route exact path="/" element={<Home />} />
      <Route path="/member" element={<MemberList />} />
      <Route path="/todo" element={<TodoList />} />
      <Route path="/contact" element={<ContactMe />} />
    </Routes>
  );
};

export default ViewBody;
