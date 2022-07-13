import React, { useEffect } from "react";
import styled from "styled-components";
import { AiOutlineGoogle, AiOutlineGithub } from "react-icons/ai";
import { useNavigate } from "react-router-dom";

const LoginWrap = styled.ul`
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
  transition: 0.4s ease-in;
  cursor: pointer;
  &:hover {
    outline: 0 none;
    background: #f6f6f6;
  }
  .button_logo {
    font-size: 2em;

    margin-right: 1rem;
  }
`;

const Login = ({ authService }) => {
  // const navigate = useNavigate();

  // const gotoHome = userId => {
  //   navigate("/member", { state: { id: userId } });
  // };

  const onLogin = e => {
    const providerName = e.currentTarget.textContent;
    authService.login(providerName).then(console.log);
    // .then(data => gotoHome(data.user.uid));
  };

  // useEffect(() => {
  //   authService.onAuthChange(user => {
  //     user && gotoHome(user.uid);
  //   });
  // });

  return (
    <LoginWrap>
      <li>
        <Button onClick={onLogin}>
          <AiOutlineGoogle className="button_logo" />
          Google
        </Button>
      </li>
      <li>
        <Button onClick={onLogin}>
          <AiOutlineGithub className="button_logo" />
          Github
        </Button>
      </li>
    </LoginWrap>
  );
};

export default Login;
