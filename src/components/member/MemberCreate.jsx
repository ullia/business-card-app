import React from "react";
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
  height: 300px;
  background: #fff;
  border-radius: 10px;
  transition: 0.2s ease-in;
  z-index: 5;

  .member__info__basic {
    position: relative;
    width: 100%;
    height: 44%;
    background: #fff;
    .mib__img {
      position: absolute;
      top: 10px;
      left: 10px;
      overflow: hidden;
      width: 148px;
      height: 148px;
      border-radius: 10px;
      z-index: 2;
      img {
        display: block;
        width: 100%;
      }
    }
    .mib__text {
      position: absolute;
      top: 25px;
      left: 180px;
      width: 55%;
      h4 {
      }
      h5 {
        width: 100%;
        padding-top: 0.6rem;
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

const MemberCreate = () => {
  return (
    <form>
      <MemberItemWrap>
        <div className="member__info__basic">
          <div className="mib__img">
            <img src="/images/default_face.jpg" alt="profile image" />
          </div>
          <div className="mib__text">
            <h4>
              <Input type="text" placeholder="이름" name="member__input__name" />
              <Select name="member__select__theme">
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
                type="text"
                placeholder="간단한 메세지"
                size="100%"
                name="member__input__message"
              />
            </h5>
          </div>
        </div>
        <div className="member__info__detail basic">
          <div className="mid__text">
            <ul>
              <li>
                <Input type="text" placeholder="회사명" name="member__input__company" />{" "}
                <span>|</span>
                <Input type="text" placeholder="부서" name="member__input__division" />
                <span>|</span> <Input type="text" placeholder="직급" name="member__input__rank" />
              </li>
              <li>
                <Input type="text" placeholder="이메일" name="member__input__email" />
              </li>
              <li>
                <Input type="text" placeholder="연락처" name="member__input__phone" />
              </li>
            </ul>
          </div>
          <div className="mid__day">
            <span>2022. 7. 13.</span>
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
