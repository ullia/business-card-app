import React, { useState } from "react";
import { AiOutlineEdit, AiOutlineDelete } from "react-icons/ai";
import styled from "styled-components";

const MemberItemWrap = styled.li`
  overflow: hidden;
  flex: 1 1 auto;
  min-width: 480px;
  height: 250px;
  background: none;
  margin: 0 1% 5%;
  border-radius: 10px;
  transition: 0.2s ease-in;
  cursor: pointer;

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
        .member__controls {
          opacity: 0;
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
  &:hover {
    transform: translate(-2px, -2px);
    box-shadow: 8px 8px 10px rgba(0, 0, 0, 0.4);
    .member__controls {
      opacity: 1 !important;
    }
  }
`;

const DEFAULT_FILE_URL = "/images/default_face.jpg";

const MemberItem = ({ member, editMemberToggle, onDelete }) => {
  const {
    id,
    name,
    theme,
    message,
    company,
    division,
    rank,
    email,
    phone,
    reportingDate,
    fileName,
    fileURL,
  } = member;
  const url = fileURL || DEFAULT_FILE_URL;

  return (
    <MemberItemWrap>
      <div className="member__info__basic">
        <div className="mib__img">
          <img src={url} alt="profile" />
        </div>
        <div className="mib__text">
          <h4>
            {name}
            <span className="member__controls">
              <AiOutlineEdit onClick={() => editMemberToggle(id)} />
              <AiOutlineDelete onClick={() => onDelete(id)} />
            </span>
          </h4>
          <h5>{message}</h5>
        </div>
      </div>
      <div className={"member__info__detail " + theme}>
        <div className="mid__text">
          <ul>
            <li>
              {company} <span>|</span> {division} <span>|</span> {rank}
            </li>
            <li>email. {email}</li>
            <li>tel. {phone}</li>
          </ul>
        </div>
        <div className="mid__day">
          <span>{reportingDate}</span>
        </div>
      </div>
    </MemberItemWrap>
  );
};

export default MemberItem;
