import React, { useState, useEffect } from "react";
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
    font-family: "NanumBarunGothic";
  }
  ul, li{
    list-style: none;
  }
  a, Link {
    text-decoration: none;
    &:visited{
      color: inherit;
    }
  }
`;

const WiWM = styled.div`
  display: flex;
`;

function App({ authService }) {
  const [members, setMembers] = useState([
    {
      id: "1",
      theme: "★★★★★",
      name: "고국천",
      message: "안녕하세요! 저는 FED가 되고싶습니다.",
      company: "SANTEL global",
      division: "잡무팀",
      rank: "과장",
      phone: "010-6969-6969",
      email: "ullia21@santelglobal.com",
      reportingDate: "2022. 07. 13.",
      fileName: "KGC",
      fileURL: "KGC.jpg",
    },
    {
      id: "2",
      theme: "★★★★",
      name: "서영규",
      message: "안녕하세요! 저는 탈주자입니다!",
      company: "SANTEL global",
      division: "잡무팀",
      rank: "대리",
      phone: "010-4242-4242",
      email: "ygseo@santelglobal.com",
      reportingDate: "2022. 07. 13.",
      fileName: "SYG",
      fileURL: null,
    },
    {
      id: "3",
      theme: "★★★",
      name: "UJIN",
      message: "히히힣",
      company: "oo초등학교",
      division: "동아리부",
      rank: "초등교사",
      phone: "010-5555-5555",
      email: "ujin@edunet.com",
      reportingDate: "2022. 07. 13.",
      fileName: "angel",
      fileURL: "angel.jpg",
    },
    {
      id: "1",
      theme: "★★",
      name: "고국천",
      message: "안녕하세요! 저는 FED가 되고싶습니다.",
      company: "SANTEL global",
      division: "잡무팀",
      rank: "과장",
      phone: "010-6969-6969",
      email: "ullia21@santelglobal.com",
      reportingDate: "2022. 07. 13.",
      fileName: null,
      fileURL: null,
    },
    {
      id: "2",
      theme: "★",
      name: "서영규",
      message: "안녕하세요! 저는 탈주자입니다!",
      company: "SANTEL global",
      division: "잡무팀",
      rank: "대리",
      phone: "010-4242-4242",
      email: "ygseo@santelglobal.com",
      reportingDate: "2022. 07. 13.",
      fileName: "SYG",
      fileURL: "SYG.jpg",
    },
    {
      id: "3",
      theme: "basic",
      name: "윤두용",
      message: "안녕하세요! 소개팅이 잘 안되어 힘듭니다.",
      company: "SANTEL global",
      division: "잡무팀",
      rank: "주임",
      phone: "010-5555-5555",
      email: "dudragon@santelglobal.com",
      reportingDate: "2022. 07. 13.",
      fileName: null,
      fileURL: null,
    },
    {
      id: "1",
      theme: "basic",
      name: "고국천",
      message: "안녕하세요! 저는 FED가 되고싶습니다.",
      company: "SANTEL global",
      division: "잡무팀",
      rank: "과장",
      phone: "010-6969-6969",
      email: "ullia21@santelglobal.com",
      reportingDate: "2022. 07. 13.",
      fileName: "KGC",
      fileURL: "KGC.jpg",
    },
    {
      id: "2",
      theme: "basic",
      name: "서영규",
      message: "안녕하세요! 저는 탈주자입니다!",
      company: "SANTEL global",
      division: "잡무팀",
      rank: "대리",
      phone: "010-4242-4242",
      email: "ygseo@santelglobal.com",
      reportingDate: "2022. 07. 13.",
      fileName: "SYG",
      fileURL: "SYG.jpg",
    },
    {
      id: "3",
      theme: "basic",
      name: "윤두용",
      message: "안녕하세요! 소개팅이 잘 안되어 힘듭니다.",
      company: "SANTEL global",
      division: "잡무팀",
      rank: "주임",
      phone: "010-5555-5555",
      email: "dudragon@santelglobal.com",
      reportingDate: "2022. 07. 13.",
      fileName: null,
      fileURL: null,
    },
    {
      id: "3",
      theme: "basic",
      name: "윤두용",
      message: "안녕하세요! 소개팅이 잘 안되어 힘듭니다.",
      company: "SANTEL global",
      division: "잡무팀",
      rank: "주임",
      phone: "010-5555-5555",
      email: "dudragon@santelglobal.com",
      reportingDate: "2022. 07. 13.",
      fileName: null,
      fileURL: null,
    },
  ]);

  const [contTitle, setContTitle] = useState("Home");
  const btnNameToTitle = e => {
    setContTitle(e.currentTarget.textContent);
    console.log(contTitle);
  };

  // useEffect(() => {

  // }, [contTitle]);

  return (
    <WiWM>
      <GlobalStyle />
      <Navigation authService={authService} btnNameToTitle={btnNameToTitle} />
      <View members={members} contTitle={contTitle} />
    </WiWM>
  );
}

export default App;
