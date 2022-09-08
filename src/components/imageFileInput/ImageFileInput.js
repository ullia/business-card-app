import React, { useState, useRef } from "react";
import styled from "styled-components";
import { FiUpload } from "react-icons/fi";

const ImageFileInputWrap = styled.div`
  position: absolute;
  top: 168px;
  > input {
    display: none;
  }
  > button {
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
    width: 148px;
    height: 28px;
    border-radius: 10px;
    border: 0 none;
    z-index: 2;
    cursor: pointer;

    font-family: "NanumBarunGothic";
    &.loading {
      background: #e56b6f;
      color: #fff;
    }
    .button__text {
      display: inline-block;
      width: 80px;
      overflow: hidden;
      white-space: nowrap;
    }
    .ico__upload {
      margin-left: 10px;
    }
  }
`;

const ImageFileInput = ({ imageUploader, name, onFileChange }) => {
  const [loading, setLoading] = useState(false);
  const inputRef = useRef();
  const onButtonClick = e => {
    e.preventDefault();
    inputRef.current.click();
  };

  const onChange = async e => {
    // console.dir(e.target);
    // console.log(e.target.files[0]);
    setLoading(true);

    const fileObj = e.target.files[0];
    const uploaded = await imageUploader.upload(fileObj);
    console.log(uploaded);

    setLoading(false);

    onFileChange({
      name: uploaded.original_filename,
      url: uploaded.url,
    });
  };

  return (
    <ImageFileInputWrap>
      <input ref={inputRef} type="file" accept="image/*" name="file" onChange={onChange} />
      <button className={loading && "loading"} onClick={onButtonClick}>
        <span className="button__text">{name || `이미지 업로드`}</span>
        <FiUpload className="ico__upload" />
      </button>
    </ImageFileInputWrap>
  );
};

export default ImageFileInput;
