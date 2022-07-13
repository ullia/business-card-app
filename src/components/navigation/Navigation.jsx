import React from "react";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { FiLogOut } from "react-icons/fi";
import styled from "styled-components";
import Login from "../login/Login";
import Menu from "./Menu";

const NaviWrap = styled.section`
  display: flex;
  position: fixed;
  left: 0;
  top: 0;
  flex-flow: column;
  min-width: 270px;
  height: 100vh;
  border-right: 1px solid #ccc;
  .navi__head {
    padding: 1em;
    display: flex;

    h1 {
      display: flex;
      width: 100%;
      align-items: center;
      justify-content: start;
      text-transform: uppercase;
      font: 700 1em "arial";
      .logo {
        font-size: 40px;
        margin-right: 1rem;
      }
      .btn-logout {
        display: flex;
        margin-left: auto;
        border: 0 none;
        background: transparent;
        font-size: 20px;
        cursor: pointer;
      }
    }
  }
  .navi__body {
    display: flex;
    flex-flow: column;
    padding: 1em;
  }
  .navi__footer {
    display: flex;
    margin-top: auto;
    padding: 1em;
    span {
      font: 400 0.7em "arial";
      color: gray;
    }
  }
`;

const Navigation = ({ authService, onLogout }) => {
  return (
    <NaviWrap>
      <div className="navi__head">
        <h1>
          <BsFillPersonLinesFill className="logo" />
          who's with me
          {true && (
            <button className="btn-logout">
              <FiLogOut onClick={onLogout} />
            </button>
          )}
        </h1>
      </div>
      <div className="navi__body">
        <Login authService={authService} />
        <Menu />
      </div>
      <div className="navi__footer">
        <span>© 2022 Cielo. All Rights Reserved</span>
      </div>
    </NaviWrap>
  );
};

export default Navigation;
