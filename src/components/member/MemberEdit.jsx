import React, { useRef } from "react";
import styled from "styled-components";
import { AiOutlinePlus } from "react-icons/ai";

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

const MemberEditWrap = styled.div`
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

const MemberEdit = ({ member, editMemberToggle, onEdit }) => {
  const formRef = useRef();
  const nameRef = useRef();
  const themeRef = useRef();
  const messageRef = useRef();
  const companyRef = useRef();
  const divisionRef = useRef();
  const rankRef = useRef();
  const emailRef = useRef();
  const phoneRef = useRef();

  const onSubmit = e => {
    e.preventDefault();
    console.log("submit success");
    const today = new Date();
    const newMember = {
      id: member.id,
      theme: themeRef.current.value || "",
      name: nameRef.current.value || "",
      message: messageRef.current.value || "",
      company: companyRef.current.value || "",
      division: divisionRef.current.value || "",
      rank: rankRef.current.value || "",
      phone: phoneRef.current.value || "",
      email: emailRef.current.value || "",
      reportingDate: today.toLocaleDateString(
        "ko-KR",
        {
          year: "numeric",
          month: "long",
          day: "numeric",
        },
        ".",
      ),
      fileName: null,
      fileURL: null,
    };
    // console.log(newMember);
    if (
      newMember.name === "" ||
      newMember.company === "" ||
      newMember.division === "" ||
      newMember.phone === "" ||
      newMember.email === ""
    ) {
      return alert("이름, 회사명, 부서, 연락처, 이메일은 필수 항목입니다.");
    }
    formRef.current.reset();
    onEdit(newMember);
    editMemberToggle();
  };

  return (
    <form ref={formRef} onSubmit={onSubmit}>
      <MemberEditWrap>
        <div className="member__info__basic">
          <div className="mib__img">
            <img src="/images/default_face.jpg" alt="profile image" />
          </div>
          <div className="mib__text">
            <h4>
              <Input
                ref={nameRef}
                defaultValue={member.name}
                type="text"
                name="member__input__name"
              />
              <Select ref={themeRef} defaultValue={member.theme} name="member__select__theme">
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
                defaultValue={member.message}
                type="text"
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
                  defaultValue={member.company}
                  name="member__input__company"
                />
                <span>|</span>
                <Input
                  ref={divisionRef}
                  type="text"
                  defaultValue={member.division}
                  name="member__input__division"
                />
                <span>|</span>
                <Input
                  ref={rankRef}
                  type="text"
                  defaultValue={member.rank}
                  name="member__input__rank"
                />
              </li>
              <li>
                <Input
                  ref={emailRef}
                  type="text"
                  defaultValue={member.email}
                  name="member__input__email"
                />
              </li>
              <li>
                <Input
                  ref={phoneRef}
                  type="text"
                  defaultValue={member.phone}
                  name="member__input__phone"
                />
              </li>
            </ul>
          </div>
          <div className="mid__day">
            <span>{member.reportingDate}</span>
          </div>
        </div>
        <CreateButton type="submit">
          <AiOutlinePlus />
        </CreateButton>
      </MemberEditWrap>
    </form>
  );
};

export default MemberEdit;
