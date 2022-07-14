import React, { useRef } from "react";
import styled from "styled-components";

const ViewHeadWrap = styled.div`
  height: 40px;
  background: transparent;
  border-bottom: 1px solid #ccc;
  margin-bottom: 2rem;
  h3 {
    line-height: 40px;
  }
`;

const ViewHead = ({ contTitle }) => {
  // console.log(contTitle);

  const searchRef = useRef();

  const onKeyPress = e => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };

  const handleSearch = () => {
    const value = searchRef.current.value;
    alert(value);
  };

  return (
    <ViewHeadWrap>
      <h3>{contTitle}</h3>
      {contTitle === "Member" ? (
        <input
          ref={searchRef}
          type="search"
          placeholder="...Search"
          id="member__search"
          onKeyPress={onKeyPress}
        />
      ) : null}
    </ViewHeadWrap>
  );
};

export default ViewHead;
