import React from "react";
import styled from "styled-components";
import {
  AiOutlineHome,
  AiOutlineUsergroupAdd,
  AiOutlineOrderedList,
  AiOutlineUser,
} from "react-icons/ai";

const MenuWrap = styled.ul`
  list-style: none;
  li {
  }
`;

const Button = styled.button`
  padding: 10px;
  display: flex;
  width: 100%;
  margin-bottom: 10px;
  font: 700 1em/1em "arial";
  align-items: center;
  border: 0 none;
  outline: 1px solid #e6e6e6;
  border-radius: 10px;
  background: transparent;
  transition: 0.2s ease-in;
  cursor: pointer;
  &:hover {
    transform: translate(-4px, -4px);
    outline: 0 none;
    background: #f6f6f6;
    box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
  }
  .button_logo {
    font-size: 2em;

    margin-right: 1rem;
  }
`;

const Menu = () => {
  return (
    <MenuWrap>
      <li>
        <Button>
          <AiOutlineHome className="button_logo" />
          Home
        </Button>
      </li>
      <li>
        <Button>
          <AiOutlineUsergroupAdd className="button_logo" />
          Member
        </Button>
      </li>
      <li>
        <Button>
          <AiOutlineOrderedList className="button_logo" />
          TodoList
        </Button>
      </li>
      <li>
        <Button>
          <AiOutlineUser className="button_logo" />
          Contact Me
        </Button>
      </li>
    </MenuWrap>
  );
};

export default Menu;
