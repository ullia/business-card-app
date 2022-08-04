import React, { useState, useRef } from "react";
import styled from "styled-components";
import { AiOutlinePlus } from "react-icons/ai";
import uuid from "react-uuid";

const Input = styled.input`
  height: 28px;
  padding: 0 10px;
  font: 500 0.8rem/1.4rem "NanumBarunGothic";
  width: ${props => props.size || "200px"};
`;

const Textarea = styled.textarea`
  height: 28px;
  padding: 0 10px;
  font: 500 0.8rem/1.4rem "NanumBarunGothic";
  width: ${props => props.size || "200px"};
  height: 4em;
  /* border: none; */
  resize: none;
`;

const Select = styled.select`
  margin-left: 10px;
  height: 28px;
  padding: 0 10px;
  font: 500 0.8rem/1.4rem "NanumBarunGothic";
  width: ${props => props.size || "200px"};
  option {
    padding: 5px 10px;
  }
`;

const MemberItemWrap = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  overflow: hidden;
  width: 50%;
  min-width: 900px;
  height: 300px;
  background: #fff;
  border-radius: 10px;
  transition: 0.2s ease-in;
  z-index: 5;

  .member__info__basic {
    display: flex;
    position: relative;
    width: 100%;
    height: 44%;
    background: #fff;
    .mib__img {
      overflow: hidden;
      width: 148px;
      height: 148px;
      margin: 10px;
      border-radius: 10px;
      z-index: 2;
      img {
        display: block;
        width: 100%;
      }
    }
    .mib__text {
      margin: 1.2em 1em 0 1em;
      flex: 1;
      h4 {
        display: flex;
        align-items: center;
        font: 700 1.2rem/1.2rem "NanumBarunGothicBold";
        span {
          display: inline-block;
          margin-left: auto;
          svg {
            font-size: 1.4rem;
            margin-left: 0.5rem;
            &:hover {
              color: #b56576;
            }
          }
        }
      }
      h5 {
        width: 100%;
        padding-top: 0.6rem;
        font: 500 0.8rem/1.4rem "NanumBarunGothic";
        letter-spacing: 0;
      }
    }
  }
  .member__info__detail {
    position: relative;
    width: 100%;
    height: 56%;
    background: #ececec;
    padding: 16px 0 0 180px;
    &.★★★★★ {
      background: #355070;
    }
    &.★★★★ {
      background: #6d597a;
    }
    &.★★★ {
      background: #b56576;
    }
    &.★★ {
      background: #e56b6f;
    }
    &.★ {
      background: #eaac8b;
    }
    &.basic {
      background: #7d7d7d;
    }
    .mid__text {
      ul {
        li {
          padding-bottom: 12px;
          font: 500 1rem "NanumBarunGothic";
          color: #fff;
          span {
            padding: 0 8px;
          }
        }
      }
    }
    .mid__day {
      padding-right: 15px;
      text-align: right;
      span {
        font-size: 0.8rem;
        color: #fff;
      }
    }
  }
`;

const CreateButton = styled.button`
  position: fixed;
  top: 10px;
  right: 10px;
  width: 80px;
  height: 80px;
  background: transparent;
  border: 4px solid #000;
  border-radius: 10px;
  z-index: 7;
  cursor: pointer;
  font-size: 3em;
  > * {
    display: flex;
    margin: auto;
    color: #000;
  }
`;

const MemberCreate = ({ FileInput, createMemberToggle, onAdd }) => {
  const formRef = useRef();
  const nameRef = useRef();
  const themeRef = useRef();
  const messageRef = useRef();
  const companyRef = useRef();
  const divisionRef = useRef();
  const rankRef = useRef();
  const emailRef = useRef();
  const phoneRef = useRef();
  const [file, setFile] = useState({
    fileName: null,
    fileURL: null,
  });

  const url = file.fileURL || `/images/default_face.jpg`;

  const onFileChange = file => {
    console.log(file);
    setFile({
      fileName: file.name,
      fileURL: file.url,
    });
  };

  const onSubmit = e => {
    e.preventDefault();
    console.log("submit success");
    const today = new Date();
    const member = {
      // id: Date.now(),
      id: uuid(),
      theme: themeRef.current.value || "",
      name: nameRef.current.value || "",
      message: messageRef.current.value || "",
      company: companyRef.current.value || "",
      division: divisionRef.current.value || "",
      rank: rankRef.current.value || "",
      phone: phoneRef.current.value || "",
      email: emailRef.current.value || "",
      reportingDate: today.toLocaleDateString("ko-KR", {
        year: "numeric",
        month: "long",
        day: "numeric",
      }),
      fileName: file.fileName || null,
      fileURL: file.fileURL || null,
    };
    // if (
    //   member.name === "" ||
    //   member.company === "" ||
    //   member.division === "" ||
    //   member.phone === "" ||
    //   member.email === ""
    // ) {
    //   return alert("이름, 회사명, 부서, 연락처, 이메일은 필수 항목입니다.");
    // }
    formRef.current.reset();
    onAdd(member);
    createMemberToggle();
  };
  return (
    <form ref={formRef} onSubmit={onSubmit}>
      <MemberItemWrap>
        <div className="member__info__basic">
          <div className="mib__img">
            <img src={url} alt="profile" />
            <FileInput name={file.fileName} onFileChange={onFileChange} />
          </div>
          <div className="mib__text">
            <h4>
              <Input ref={nameRef} type="text" placeholder="이름" name="member__input__name" />
              <Select ref={themeRef} name="member__select__theme">
                <option value="none">=== 중요도 ===</option>
                <option value="기본" selected>
                  기본
                </option>
                <option value="★★★★★">★★★★★</option>
                <option value="★★★★">★★★★</option>
                <option value="★★★">★★★</option>
                <option value="★★">★★</option>
                <option value="★">★</option>
              </Select>
            </h4>
            <h5>
              <Textarea
                ref={messageRef}
                type="text"
                placeholder="간단한 메세지"
                size="58.5%"
                name="member__input__message"
              />
            </h5>
          </div>
        </div>
        <div className="member__info__detail basic">
          <div className="mid__text">
            <ul>
              <li>
                <Input
                  ref={companyRef}
                  type="text"
                  placeholder="회사명"
                  name="member__input__company"
                />
                <span>|</span>
                <Input
                  ref={divisionRef}
                  type="text"
                  placeholder="부서"
                  name="member__input__division"
                />
                <span>|</span>
                <Input ref={rankRef} type="text" placeholder="직급" name="member__input__rank" />
              </li>
              <li>
                <Input
                  ref={emailRef}
                  type="text"
                  placeholder="이메일"
                  name="member__input__email"
                />
              </li>
              <li>
                <Input
                  ref={phoneRef}
                  type="text"
                  placeholder="연락처"
                  name="member__input__phone"
                />
              </li>
            </ul>
          </div>
          <div className="mid__day">
            <span>작성일 날짜</span>
          </div>
        </div>
        <CreateButton type="submit">
          <AiOutlinePlus />
        </CreateButton>
      </MemberItemWrap>
    </form>
  );
};

export default MemberCreate;
