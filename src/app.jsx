import React from "react";
import styled, { createGlobalStyle } from "styled-components";
import Navigation from "./components/navigation/Navigation";
import View from "./components/viewer/View";

const GlobalStyle = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  body{
    background: #fff;
    font-family: "Helvetica Neue",Helvetica;
  }
  ul, li{
    list-style: none;
  }
`;

const WiWM = styled.div`
  display: flex;
`;

function app({ authService }) {
  const onLogout = () => {
    console.log("Logout");
  };

  return (
    <WiWM>
      <GlobalStyle />
      <Navigation authService={authService} onLogout={onLogout} />
      <View />
    </WiWM>
  );
}

export default app;
