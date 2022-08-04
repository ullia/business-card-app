import React, { useRef } from "react";
import styled from "styled-components";

const ImageFileInputWrap = styled.div`
  position: absolute;
  > input {
    display: none;
  }
  > button {
    overflow: hidden;
    width: 148px;
    height: 28px;
    margin-top: 8px;
    border-radius: 10px;
    border: 0 none;
    z-index: 2;
    img {
      display: block;
      width: 100%;
    }
  }
`;

const ImageFileInput = ({ imageUploader, name, onFileChange }) => {
  const inputRef = useRef();
  const onButtonClick = e => {
    e.preventDefault();
    inputRef.current.click();
  };

  const onChange = async e => {
    // console.dir(e.target);
    // console.log(e.target.files[0]);
    const fileObj = e.target.files[0];
    const uploaded = await imageUploader.upload(fileObj);
    console.log(uploaded);
    onFileChange({
      name: uploaded.original_filename,
      url: uploaded.url,
    });
  };

  return (
    <ImageFileInputWrap>
      <input ref={inputRef} type="file" accept="image/*" name="file" onChange={onChange} />
      <button onClick={onButtonClick}>{name || "프로필 이미지 없음"}</button>
    </ImageFileInputWrap>
  );
};

export default ImageFileInput;
