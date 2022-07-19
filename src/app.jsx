import React, { useState, useEffect } from "react";
import styled, { createGlobalStyle } from "styled-components";
import Navigation from "./components/navigation/Navigation";
import View from "./components/viewer/View";
import memberData from "./data/member";

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
  const [members, setMembers] = useState(memberData);
  const [contTitle, setContTitle] = useState("");

  const search = keyword => {
    const result = members.filter(member => member.name.includes(keyword));

    setMembers(result);
  };

  const listReset = () => {
    const beforeSearchMembers = memberData;
    setMembers(beforeSearchMembers);
    // console.log(members);
  };

  const btnNameToTitle = e => {
    // console.log(pathName);
    return setContTitle(e.currentTarget.textContent);
  };

  const onAdd = memberObj => {
    // console.log(memberObj);
    const update = [...members, memberObj];
    setMembers(update);
  };

  const onEdit = memberObj => {
    console.log(memberObj);
    const update = members.map(member => {
      if (member.id === memberObj.id) {
        return memberObj;
      }
      return member;
    });
    setMembers(update);
  };

  const onDelete = id => {
    setMembers(members.filter(member => member.id !== id));
  };

  useEffect(() => {
    const pathName = window.location.pathname.split("/")[1];
    setContTitle(pathName || "home");
  }, [contTitle]);

  return (
    <WiWM>
      <GlobalStyle />
      <Navigation authService={authService} btnNameToTitle={btnNameToTitle} />
      <View
        members={members}
        contTitle={contTitle}
        search={search}
        listReset={listReset}
        onAdd={onAdd}
        onEdit={onEdit}
        onDelete={onDelete}
      />
    </WiWM>
  );
}

export default App;
