import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const MemberItemWrap = styled.li`
  overflow: hidden;
  width: 32%;
  height: 250px;
  background: none;
  margin-bottom: 2%;
  border-radius: 10px;
  transition: 0.2s ease-in;
  cursor: pointer;
  &:hover {
    transform: translate(-2px, -2px);
    box-shadow: 8px 8px 10px rgba(0, 0, 0, 0.4);
  }
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
        font: 700 1.2rem/1.2rem "NanumBarunGothicBold";
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

const DEFAULT_FILE_URL = "default_face.jpg";

const MemberItem = ({ member }) => {
  const {
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
      <Link to="/memberdetail">
        <div className="member__info__basic">
          <div className="mib__img">
            <img src={`/images/` + url} alt="profile image" />
          </div>
          <div className="mib__text">
            <h4>{name}</h4>
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
      </Link>
    </MemberItemWrap>
  );
};

export default MemberItem;
